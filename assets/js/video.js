window.onload = function () {
  document.querySelector(".div-video").style.display = "none";
  const videoDiv = document.querySelector(".div-video");
  videoDiv.style.opacity = "0"; // Esconde o vídeo inicialmente
  videoDiv.style.visibility = "hidden"; // Mantém o vídeo invisível
};
function openVideo() {
  const videoDiv = document.querySelector(".div-video");

  if (videoDiv.style.display === "none" || videoDiv.style.display === "") {
    videoDiv.style.display = "block";
  } else {
    videoDiv.style.display = "none";
  }
  if (videoDiv.style.opacity === "0") {
    videoDiv.style.opacity = "1"; // Exibe o vídeo com opacidade
    videoDiv.style.visibility = "visible"; // Torna o vídeo visível
  } else {
    videoDiv.style.opacity = "0"; // Oculta o vídeo
    videoDiv.style.visibility = "hidden"; // Torna o vídeo invisível
  }
}
