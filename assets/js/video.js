const videoDiv = document.querySelector(".div-video");
const marginVideo = document.getElementById("margin-video");

const videoDiv2 = document.querySelector(".div-video2");
const marginVideo2 = document.getElementById("margin-video2");
window.onload = function () {
  [videoDiv, videoDiv2].forEach((div) => {
    div.style.display = "block";
    div.style.opacity = "1";
  });
  marginVideo.style.marginTop = "0px";
  marginVideo2.style.marginTop = "0px";
};

function toggleVideo(videoElement, marginElement) {
  const isHidden =
    videoElement.style.display === "block" || videoElement.style.display === "";

  videoElement.style.display = isHidden ? "none" : "block";
  videoElement.style.opacity = isHidden ? "0" : "1";
  videoElement.style.visibility = isHidden ? "hidden" : "visible";

  marginElement.style.marginTop = isHidden ? "0px" : "-5%";
}

function openVideo() {
  toggleVideo(videoDiv, marginVideo);
}

function openVideo2() {
  toggleVideo(videoDiv2, marginVideo2);
}
