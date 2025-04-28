function ajustarAlturaSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");
  const footer = document.getElementById("footer");

  const alturaConteudo = mainContent.offsetHeight + footer.offsetHeight;
  const alturaJanela = window.innerHeight;

  if (alturaConteudo > alturaJanela) {
    sidebar.style.height = alturaConteudo + "px";
  } else {
    sidebar.style.height = alturaJanela + "px";
  }
}

window.addEventListener("load", ajustarAlturaSidebar);
window.addEventListener("resize", ajustarAlturaSidebar);
