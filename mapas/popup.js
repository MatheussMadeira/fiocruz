// Função para exibir o popup ao carregar a página
window.onload = function () {
  document.getElementById("popup").style.display = "block";
};

// Função para fechar o popup
function closePopup() {
  const popup = document.getElementById("popup");
  const sidebar = document.querySelector(".sidebar");

  // Fechar o popup
  popup.style.display = "none";

  // Ajustar a margem superior da sidebar para ocupar o espaço vazio
  const popupHeight = popup.offsetHeight; // Altura do popup
  sidebar.style.marginTop = `0px`; // Subtrai a altura do popup
}
