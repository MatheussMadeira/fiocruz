function mostrarToast(event) {
  Toastify({
    text: "Finalize o curso para acessar essa página",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    backgroundColor: "#05314a",
    stopOnFocus: true,
  }).showToast();
}
