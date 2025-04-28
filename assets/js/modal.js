// Função genérica para abrir e carregar conteúdo em um dialog
function configurarDialog(botaoId, dialogId, contentId, arquivoHtml) {
  const botao = document.getElementById(botaoId);
  const dialog = document.getElementById(dialogId);
  const content = document.getElementById(contentId);

  botao.addEventListener("click", async () => {
    dialog.showModal();
    try {
      const response = await fetch(arquivoHtml);
      const texto = await response.text();
      content.innerHTML = texto;
    } catch (err) {
      content.textContent = "Erro ao carregar o conteúdo.";
    }
  });

  // Fechar clicando no botão 'Fechar'
  dialog.querySelector(".closeDialog").addEventListener("click", () => {
    dialog.close();
  });

  // Fechar clicando fora da caixa (backdrop)
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    ) {
      dialog.close();
    }
  });
}

// Configura os dois diálogos
configurarDialog(
  "openGlossario",
  "dialogGlossario",
  "dialogGlossarioContent",
  "glossario.html"
);
configurarDialog(
  "openCreditos",
  "dialogCreditos",
  "dialogCreditosContent",
  "creditos.html"
);

function toggleSection(header) {
  const content = header.nextElementSibling;
  const symbol = header.querySelector(".toggle-symbol");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    symbol.classList.remove("fa-plus");
    symbol.classList.add("fa-minus");
  } else {
    content.style.display = "none";
    symbol.classList.remove("fa-minus");
    symbol.classList.add("fa-plus");
  }
}
