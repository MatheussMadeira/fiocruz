// Detecta quando o fullscreen é ativado ou desativado
document.addEventListener("fullscreenchange", handleFullScreenChange);
document.addEventListener("webkitfullscreenchange", handleFullScreenChange);
document.addEventListener("mozfullscreenchange", handleFullScreenChange);
document.addEventListener("MSFullscreenChange", handleFullScreenChange);

function handleFullScreenChange() {
  // Verifica se o document está em fullscreen
  if (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  ) {
    // Se estiver em fullscreen, força a tela para o modo horizontal
    document.body.style.transform = "rotate(90deg)";
    document.body.style.transformOrigin = "top left";
    document.body.style.width = "100vh"; // Ajusta a largura para altura, forçando o modo paisagem
    document.body.style.height = "100vw"; // Ajusta a altura para a largura
    document.body.style.overflow = "hidden"; // Impede o scroll ao forçar a rotação
  } else {
    // Se sair do fullscreen, reverte a rotação
    document.body.style.transform = "rotate(0deg)";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.overflow = "auto"; // Permite o scroll normal
  }
}
