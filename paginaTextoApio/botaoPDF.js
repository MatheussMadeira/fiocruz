function getUrlParams() {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    modulo: urlParams.get("modulo"),
    aula: urlParams.get("aula"),
  };
}

const { modulo, aula } = getUrlParams();
if (modulo && aula) {
  const pdfPath = `../modulo${modulo}/txtApoio/Aula${aula}.pdf`;
  const iframe = document.getElementById("pdfIframe");

  // Carrega o PDF diretamente no iframe
  iframe.src = pdfPath;
} else {
  alert("Parâmetros inválidos ou ausentes na URL.");
}
