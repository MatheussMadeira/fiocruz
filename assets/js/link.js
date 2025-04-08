document.addEventListener("DOMContentLoaded", function () {
  // Função para obter o número do módulo atual
  function obterModuloAtual() {
    const url = window.location.href; // Obtém a URL atual
    const regexAula = /modulo(\d+)-aula(\d+)/; // Expressão regular para capturar módulo e aula
    const regexQuiz = /modulo(\d+)-quiz\.html/; // Expressão regular para capturar módulo de quiz

    let moduloAtual = 0;

    // Verifica se a URL corresponde ao formato de aula
    const matchesAula = url.match(regexAula);
    if (matchesAula) {
      moduloAtual = parseInt(matchesAula[1]); // Módulo da URL de aula
    }

    // Verifica se a URL corresponde ao formato de quiz
    const matchesQuiz = url.match(regexQuiz);
    if (matchesQuiz) {
      moduloAtual = parseInt(matchesQuiz[1]); // Módulo da URL de quiz
    }

    return moduloAtual; // Retorna o módulo atual
  }

  // Função para obter o número da aula a partir da URL
  function obterAulaAtual() {
    const url = window.location.href; // Obtém a URL atual
    const regex = /modulo(\d+)-aula(\d+)/; // Expressão regular para capturar módulo e aula
    const matches = url.match(regex); // Verifica se a URL corresponde ao padrão

    let aulaAtual = 0;

    // Se a URL corresponder ao formato esperado, pega a aula
    if (matches) {
      aulaAtual = parseInt(matches[2]); // Aula da URL
    }

    return aulaAtual; // Retorna a aula atual
  }

  // Últimas aulas de cada módulo, conforme sua descrição
  const ultimaAulaPorModulo = {
    1: 9, // Módulo 1: Última aula é a 9
    2: 8, // Módulo 2: Última aula é a 8
    3: 6, // Módulo 3: Última aula é a 6
    4: 4, // Módulo 4: Última aula é a 4
  };

  // Obtenha o módulo atual e a aula atual
  const moduloAtual = obterModuloAtual();
  const aulaAtual = obterAulaAtual();

  // Obtenha todos os links das aulas
  const aulas = document.querySelectorAll(".subItem"); // Todos os links com a classe .subItem

  // Iterar sobre os links das aulas e aplicar a lógica de habilitar/desabilitar
  aulas.forEach((aula) => {
    const aulaNumero = parseInt(aula.getAttribute("data-aula")); // Número da aula no link
    const moduloNumero = parseInt(aula.getAttribute("data-modulo")); // Número do módulo no link
    const isQuiz = aula.classList.contains("quiz"); // Verifica se é um link de quiz

    // Se o módulo atual é o mesmo do link, e a aula é anterior ou igual à aula atual, libere o link
    if (
      moduloNumero < moduloAtual ||
      (moduloNumero === moduloAtual && aulaNumero <= aulaAtual)
    ) {
      aula.classList.remove("desabilitado");
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else if (moduloNumero === moduloAtual && aulaNumero === aulaAtual + 1) {
      // Se a aula for a próxima da atual (aula X + 1)
      aula.classList.remove("desabilitado");
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else {
      aula.classList.add("desabilitado");
      aula.style.pointerEvents = "none"; // Desabilita o clique
    }

    // Se a aula for a última do módulo atual, liberar a primeira aula do próximo módulo
    if (
      moduloNumero === moduloAtual &&
      aulaNumero === ultimaAulaPorModulo[moduloNumero]
    ) {
      const proximoModulo = moduloNumero + 1;
      if (ultimaAulaPorModulo[proximoModulo]) {
        const primeiraAulaProximoModulo = document.querySelector(
          `.subItem[data-modulo="${proximoModulo}"][data-aula="1"]`
        );
        if (primeiraAulaProximoModulo) {
          primeiraAulaProximoModulo.classList.remove("desabilitado");
          primeiraAulaProximoModulo.style.pointerEvents = "auto"; // Habilita o clique
        }
      }
    }
  });

  // Lógica para habilitar os links de encerramento e quiz, apenas se o usuário estiver na aula 4 do módulo 4
  const linkEncerramento = document.querySelector(
    'a[href="../encerramento.html"]'
  );
  const linkQuiz = document.querySelector('a[href="../quiz.html"]');

  const quizNumero = parseInt(aula.getAttribute("data-quiz"));
  if (moduloAtual === 4 && quizNumero === 1) {
    if (linkEncerramento) {
      linkEncerramento.classList.remove("desabilitado");
      linkEncerramento.style.pointerEvents = "auto"; // Habilita o clique
    }
    if (linkQuiz) {
      linkQuiz.classList.remove("desabilitado");
      linkQuiz.style.pointerEvents = "auto"; // Habilita o clique
    }
  } else {
    if (linkEncerramento) {
      linkEncerramento.classList.add("desabilitado");
      linkEncerramento.style.pointerEvents = "none"; // Desabilita o clique
    }
    if (linkQuiz) {
      linkQuiz.classList.add("desabilitado");
      linkQuiz.style.pointerEvents = "none"; // Desabilita o clique
    }
  }

  // Lógica para liberar as aulas do próximo módulo após o quiz
  const quizLink =
    window.location.pathname.includes("modulo") &&
    window.location.pathname.includes("quiz");
  if (quizLink) {
    const proximoModulo = moduloAtual + 1;
    if (ultimaAulaPorModulo[moduloAtual]) {
      const primeiraAulaProximoModulo = document.querySelector(
        `.subItem[data-modulo="${proximoModulo}"][data-aula="1"]`
      );
      if (primeiraAulaProximoModulo) {
        primeiraAulaProximoModulo.classList.remove("desabilitado");
        primeiraAulaProximoModulo.style.pointerEvents = "auto"; // Habilita o clique
      }
    }
  }

  // Liberar as aulas anteriores quando o usuário estiver no quiz
  if (quizLink) {
    aulas.forEach((aula) => {
      const aulaNumero = parseInt(aula.getAttribute("data-aula"));
      const moduloNumero = parseInt(aula.getAttribute("data-modulo"));
      // Liberar todas as aulas anteriores e de módulos anteriores
      if (
        moduloNumero < moduloAtual ||
        (moduloNumero === moduloAtual && aulaNumero <= aulaAtual)
      ) {
        aula.classList.remove("desabilitado");
        aula.style.pointerEvents = "auto"; // Habilita o clique
      }
    });
  }
});
