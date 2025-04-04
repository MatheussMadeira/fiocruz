document.addEventListener("DOMContentLoaded", function () {
  // Função para obter o número da aula e do módulo a partir da URL
  function obterAulaAtual() {
    const url = window.location.href; // Obtém a URL atual
    const regex = /modulo(\d+)-aula(\d+)/; // Expressão regular para capturar módulo e aula
    const matches = url.match(regex); // Verifica se a URL corresponde ao padrão

    let aulaAtual = 0;
    let moduloAtual = 0;

    // Se a URL corresponder ao formato esperado, pega o módulo e a aula
    if (matches) {
      moduloAtual = parseInt(matches[1]); // Módulo da URL
      aulaAtual = parseInt(matches[2]); // Aula da URL
    }

    return { aulaAtual, moduloAtual }; // Retorna a aula e o módulo atual
  }

  // Obtenha a aula e o módulo atual
  const { aulaAtual, moduloAtual } = obterAulaAtual();

  // Obtenha todos os links das aulas
  const aulas = document.querySelectorAll(".subItem"); // Todos os links com a classe .subItem

  // Última aula de cada módulo
  const ultimaAulaModulo = {
    1: 8, // Última aula do Módulo 1
    2: 9, // Última aula do Módulo 2
    3: 6, // Última aula do Módulo 3
    4: 4, // Última aula do Módulo 4
  };

  // Iterar sobre os links das aulas e aplicar a lógica de habilitar/desabilitar
  aulas.forEach((aula) => {
    const aulaNumero = parseInt(aula.getAttribute("data-aula")); // Número da aula no link
    const moduloNumero = parseInt(aula.getAttribute("data-modulo")); // Número do módulo no link

    // Habilitar as aulas anteriores ou a aula atual
    if (moduloNumero === moduloAtual && aulaNumero <= aulaAtual) {
      // Habilitar o link para a aula anterior ou atual
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    }

    // Habilitar a próxima aula
    if (moduloNumero === moduloAtual && aulaNumero === aulaAtual + 1) {
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    }

    // Habilitar o primeiro link do próximo módulo após terminar a última aula do módulo atual
    if (moduloNumero === moduloAtual + 1 && aulaNumero === 1) {
      aula.classList.remove("desabilitado"); // Remove a classe desabilitada
      aula.style.pointerEvents = "auto"; // Habilita o clique
    }

    // Desabilitar as aulas futuras do módulo atual
    if (moduloNumero === moduloAtual && aulaNumero > aulaAtual + 1) {
      aula.classList.add("desabilitado"); // Adiciona a classe desabilitada
      aula.style.pointerEvents = "none"; // Desabilita o clique
    }

    // Desabilitar as aulas de módulos seguintes
    if (moduloNumero > moduloAtual) {
      aula.classList.add("desabilitado"); // Adiciona a classe desabilitada
      aula.style.pointerEvents = "none"; // Desabilita o clique
    }

    // Caso o usuário tenha completado a última aula do módulo, liberar o acesso ao próximo módulo
    if (
      moduloNumero === moduloAtual &&
      aulaNumero === ultimaAulaModulo[moduloAtual]
    ) {
      // Liberar o primeiro link do próximo módulo
      const proximoModulo = moduloAtual + 1;
      const primeiroLinkProximoModulo = document.querySelector(
        `.subItem[data-modulo="${proximoModulo}"][data-aula="1"]`
      );
      if (primeiroLinkProximoModulo) {
        primeiroLinkProximoModulo.classList.remove("desabilitado");
        primeiroLinkProximoModulo.style.pointerEvents = "auto"; // Habilita o clique
      }
    }
  });
});
