document.addEventListener("DOMContentLoaded", function () {
  // Função para obter o número da aula e do módulo a partir da URL
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

  // Obtenha o módulo atual
  const moduloAtual = obterModuloAtual();

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

  // Obtenha a aula atual
  const aulaAtual = obterAulaAtual();

  // Obtenha todos os links das aulas
  const aulas = document.querySelectorAll(".subItem"); // Todos os links com a classe .subItem

  // Iterar sobre os links das aulas e aplicar a lógica de habilitar/desabilitar
  aulas.forEach((aula) => {
    const aulaNumero = parseInt(aula.getAttribute("data-aula")); // Número da aula no link
    const moduloNumero = parseInt(aula.getAttribute("data-modulo")); // Número do módulo no link
    const isQuiz = aula.classList.contains("quiz"); // Verifica se é um link de quiz

    // Se a aula estiver no módulo atual e for anterior ou igual à aula atual
    if (moduloNumero === moduloAtual && aulaNumero <= aulaAtual) {
      // Habilitar o link para a aula anterior ou atual
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else if (moduloNumero === moduloAtual && aulaNumero === aulaAtual + 1) {
      // Habilitar o link para a próxima aula
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else if (moduloNumero === moduloAtual && aulaNumero > aulaAtual + 1) {
      // Desabilitar os links das aulas futuras dentro do módulo atual
      aula.classList.add("desabilitado"); // Adiciona a classe desabilitada
      aula.style.pointerEvents = "none"; // Desabilita o clique
    } else if (moduloNumero === moduloAtual + 1 && aulaNumero === 1) {
      // Quando a última aula do módulo atual for completada, habilitar a primeira aula do próximo módulo
      aula.classList.remove("desabilitado");
      aula.style.pointerEvents = "auto"; // Habilita o clique
    }

    // Permitir clicar em aulas de módulos anteriores (não desabilitar)
    else if (moduloNumero < moduloAtual) {
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else {
      // Se estiver em um módulo diferente, desabilita todas as aulas do outro módulo
      aula.classList.add("desabilitado");
      aula.style.pointerEvents = "none";
    }

    // Verifica se é o quiz e se o módulo foi concluído
    if (isQuiz && moduloNumero === moduloAtual && aulaNumero === aulaAtual) {
      // Habilitar o link do quiz apenas se a última aula do módulo foi concluída
      aula.classList.remove("desabilitado");
      aula.style.pointerEvents = "auto"; // Habilita o clique
    } else if (isQuiz && moduloNumero === moduloAtual) {
      // Desabilitar o quiz se não for após a última aula
      aula.classList.add("desabilitado");
      aula.style.pointerEvents = "none";
    }
  });
});
