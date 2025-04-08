const sidebarButton = document.getElementById("sidebarButton");
const sidebar = document.getElementById("sidebar");

// Função para alternar a visibilidade da sidebar
sidebarButton.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});
