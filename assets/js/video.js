const videoDiv = document.querySelector(".div-video");
const marginVideo = document.getElementById("margin-video");
const buttonVideo = document.querySelector(".button-video"); // Seletor do seu <a> que serve como botão

const videoDiv2 = document.querySelector(".div-video2");
const marginVideo2 = document.getElementById("margin-video2");
const buttonVideo2 = document.querySelector(".button-video2"); // Seletor do segundo <a> que serve como botão

window.onload = function () {
  [videoDiv, videoDiv2].forEach((div) => {
    div.style.display = "block";
    div.style.opacity = "1";
  });
  marginVideo.style.marginTop = "0px";
  marginVideo2.style.marginTop = "0px";
};

function toggleVideo(videoElement, marginElement, buttonElement) {
  const isHidden =
    videoElement.style.display === "block" || videoElement.style.display === "";

  // Alterna a visibilidade do vídeo
  videoElement.style.display = isHidden ? "none" : "block";
  videoElement.style.opacity = isHidden ? "0" : "1";
  videoElement.style.visibility = isHidden ? "hidden" : "visible";

  // Altera a margem da div de vídeo
  marginElement.style.marginTop = isHidden ? "0px" : "-5%";

  // Altera o texto do botão
  buttonElement.innerHTML = isHidden
    ? '<span class="material-symbols-rounded" style="transform: rotateX(180deg)">touch_app</span>&nbsp Assistir vídeo'
    : '<span class="material-symbols-rounded" style="transform: rotateX(180deg)">touch_app</span>&nbsp Fechar vídeo e voltar ao conteúdo';
}

function openVideo() {
  toggleVideo(videoDiv, marginVideo, buttonVideo);
}

function openVideo2() {
  toggleVideo(videoDiv2, marginVideo2, buttonVideo2);
}
