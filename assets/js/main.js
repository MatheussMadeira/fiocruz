$(document).ready(function () {
  // Fixa rodapé
  if (
    document.body.scrollHeight &&
    document.body.scrollHeight > window.innerHeight
  ) {
    $("#rodape").removeClass("fixaRodape");
    $("#row-main").css("padding-bottom", "0%"); // Ajusta o padding do rodapé
  } else {
    $("#rodape").addClass("fixaRodape");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }

  // Ajustar o padding do menu lateral ao estar no topo
  if ($(window).scrollTop() === 0) {
    $("#row-main").css("padding-top", "0%");
    $("#menuLateral").css("padding-bottom", $("header").css("height"));
  } else {
    $("#menuLateral").css("top", 0);
    $("#sidebarButton").css("top", 0);
    $("#sidebarButton2").css("top", 0);
  }

  // Responsividade para telas menores que 980px
  var tam = $(window).width();
  if (tam <= 980) {
    $("#sidebar").addClass("esconder");
    $("#sidebarButton").addClass("open");
    $("#content").addClass("col-md-12");
    $("#content").removeClass("col-md-10");
    $("#row-main").css("padding-bottom", "0%"); // Remove o padding no celular
  } else {
    $("#sidebar").removeClass("esconder");
    $("#sidebarButton").removeClass("open");
    $("#content").removeClass("col-md-12");
    $("#content").addClass("col-md-10");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }
});

// Alteração ao redimensionar a janela
$(window).on("resize", function () {
  if (document.body.scrollHeight >= window.innerHeight) {
    $("#rodape").removeClass("fixaRodape");
    $("#row-main").css("padding-bottom", "0%"); // Ajuste para remover o padding
  } else {
    $("#rodape").addClass("fixaRodape");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }

  var win = $(this);
  if (win.width() < 980) {
    $("#sidebar").addClass("esconder");
    $("#sidebarButton").addClass("open");
    $("#content").addClass("col-md-12");
    $("#content").removeClass("col-md-10");
    $("#row-main").css("padding-bottom", "0%"); // Remove o padding no celular
  } else {
    $("#sidebar").removeClass("esconder");
    $("#sidebarButton").removeClass("open");
    $("#content").removeClass("col-md-12");
    $("#content").addClass("col-md-10");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }
});

// Recolher o menu ao clicar no botão para dispositivos menores
$(".toggle-sidebar").click(function () {
  $("#sidebar").toggleClass("esconder");
  $("#content").toggleClass("col-md-12 col-md-10");
  $("#sidebarButton").toggleClass("open");
  // Ajuste de padding
  if ($("#sidebar").hasClass("esconder")) {
    $("#row-main").css("padding-bottom", "0%");
  } else {
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }
  return false;
});

// Fixa rodapé ao rolar a página
$(window).scroll(function teste() {
  if (document.body.scrollHeight > window.innerHeight) {
    $("#rodape").removeClass("fixaRodape");
    $("#row-main").css("padding-bottom", "0%"); // Ajusta o padding do rodapé
  } else {
    $("#rodape").addClass("fixaRodape");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }

  if ($(window).scrollTop() === 0) {
    $("#row-main").css("padding-top", "0%");
    $("#menuLateral").css({ top: "", transition: "0.6s" }, "slow");
    $("#sidebarButton").css({ top: "", transition: "0.6s;" });
    $("#sidebarButton2").css({ top: "", transition: "0.6s;" });
    $("#menuLateral").css("padding-bottom", $("header").css("height"));
  } else {
    $("#menuLateral").css({ top: "0", transition: "0.6s;" }, "slow");
    $("#sidebarButton").css({ top: "0", transition: "0.6s;" }, "slow");
    $("#sidebarButton2").css({ top: "0", transition: "0.6s;" }, "slow");
    $("#menuLateral").css("padding-bottom", "0");
  }
});

// Adiciona suavidade na rolagem da ancoragem
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
});

// Adiciona tooltip (Abas)
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// SIDEBAR
// Abre com menu recolhido em Tablet e smartphone
var tam = $(window).width();
if (tam <= 980) {
  $("#sidebar").addClass("esconder");
  $("#sidebarButton").addClass("open");
  $("#content").addClass("col-md-12");
  $("#content").removeClass("col-md-10");
} else {
  $("#sidebar").removeClass("esconder");
  $("#sidebarButton").removeClass("open");
  $("#content").removeClass("col-md-12");
  $("#content").addClass("col-md-10");
}

// Recolhe menu ao reduzir tela no desktop //
$(window).on("resize", function () {
  var win = $(this);
  if (win.width() < 980) {
    $("#sidebar").addClass("esconder");
    $("#sidebarButton").addClass("open");
    $("#content").addClass("col-md-12");
    $("#content").removeClass("col-md-10");
    $("#row-main").css("padding-bottom", "0%"); // Remove o padding no celular
  } else {
    $("#sidebar").removeClass("esconder");
    $("#sidebarButton").removeClass("open");
    $("#content").removeClass("col-md-12");
    $("#content").addClass("col-md-10");
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }
});

// Collapse Sidebar
$(".toggle-sidebar").click(function () {
  $("#sidebar").toggleClass("esconder");
  $("#content").toggleClass("col-md-12 col-md-10");
  $("#sidebarButton").toggleClass("open");

  // Ajuste de padding
  if ($("#sidebar").hasClass("esconder")) {
    $("#row-main").css("padding-bottom", "0%");
  } else {
    $("#row-main").css("padding-bottom", $("#rodape").css("height"));
  }

  return false;
});
