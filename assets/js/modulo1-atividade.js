// MÓDULO 1 QUESTÃO 1
var resposta = "C1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps = $("input[name=questao1]:checked");
  if (resps.length) {
    $("#feedback1").removeClass("escondeFeedback");
    resps.each(function () {
      // concatena os values
      value += $(this).val();
    });

    if (value !== "C1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
      $("#E1").removeClass("resposta-incorreta");
    } else if (value === "A1") {
      $("#A1").addClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
      $("#E1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
      $("#E1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").addClass("resposta-incorreta");
      $("#E1").removeClass("resposta-incorreta");
    } else if (value === "E1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-correta");
      $("#D1").removeClass("resposta-incorreta");
      $("#E1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta == value) {
      mensagem =
        "Correta. As leishmanioses são causadas por protozoários do gênero <i>Leishmania</i>, transmitidos por flebotomíneos. ";
    } else if (value == "A1") {
      mensagem = "Falsa.";
    } else if (value == "B1") {
      mensagem = "Falsa. ";
    } else if (value == "D1") {
      mensagem = "Falsa. ";
    } else if (value == "E1") {
      mensagem = "Falsa. ";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});

// MÓDULO 1 QUESTÃO 2
var resposta2 = "C2"; // Resposta correta
$("input[name=questao2]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps2 = $("input[name=questao2]:checked");
  if (resps2.length) {
    $("#feedback2").removeClass("escondeFeedback");
    resps2.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "C2") {
      $("#feedback2").addClass("resposta-incorreta");
      $("#feedback2").removeClass("resposta-correta");
      $("input[name=questao2]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback2").removeClass("resposta-incorreta");
      $("#feedback2").addClass("resposta-correta");
      $("input[name=questao2]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C2") {
      $("#A2").removeClass("resposta-incorreta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").addClass("resposta-correta");
      $("#D2").removeClass("resposta-incorreta");
    } else if (value === "A2") {
      $("#A2").addClass("resposta-incorreta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").removeClass("resposta-correta");
      $("#D2").removeClass("resposta-incorreta");
    } else if (value === "B2") {
      $("#A2").removeClass("resposta-incorreta");
      $("#B2").addClass("resposta-incorreta");
      $("#C2").removeClass("resposta-correta");
      $("#D2").removeClass("resposta-incorreta");
    } else if (value === "D2") {
      $("#A2").removeClass("resposta-incorreta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").removeClass("resposta-incorreta");
      $("#D2").addClass("resposta-incorreta");
    } else if (value === "E2") {
      $("#A2").removeClass("resposta-incorreta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").removeClass("resposta-incorreta");
      $("#D2").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta2 == value) {
      mensagem =
        "Correta. Os flebotomíneos, conhecidos como 'mosquito-palha', são os vetores das leishmanioses. ";
    } else if (value == "A2") {
      mensagem = "Falsa. ";
    } else if (value == "B2") {
      mensagem = "Falsa. ";
    } else if (value == "D2") {
      mensagem = "Falsa. ";
    }

    $("#mensagem2").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem2").empty();
  }
});

// MÓDULO 1 QUESTÃO 3
var resposta3 = "B3"; // Resposta correta
$("input[name=questao3]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps3 = $("input[name=questao3]:checked");
  if (resps3.length) {
    $("#feedback3").removeClass("escondeFeedback");
    resps3.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "B3") {
      $("#feedback3").addClass("resposta-incorreta");
      $("#feedback3").removeClass("resposta-correta");
      $("input[name=questao3]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback3").removeClass("resposta-incorreta");
      $("#feedback3").addClass("resposta-correta");
      $("input[name=questao3]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C3") {
      $("#A3").removeClass("resposta-incorreta");
      $("#B3").removeClass("resposta-correta");
      $("#C3").addClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    } else if (value === "A3") {
      $("#A3").addClass("resposta-incorreta");
      $("#B3").removeClass("resposta-correta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    } else if (value === "B3") {
      $("#A3").removeClass("resposta-incorreta");
      $("#B3").addClass("resposta-correta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    } else if (value === "D3") {
      $("#A3").removeClass("resposta-incorreta");
      $("#B3").removeClass("resposta-correta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta3 == value) {
      mensagem =
        "Correta. As leishmanioses recebem pouco investimento para controle e tratamento, sendo classificadas como doenças tropicais negligenciadas. ";
    } else if (value == "A3") {
      mensagem = "Falsa. ";
    } else if (value == "C3") {
      mensagem = "Falsa. ";
    } else if (value == "D3") {
      mensagem = "Falsa. ";
    }

    $("#mensagem3").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem3").empty();
  }
});

// MÓDULO 1 QUESTÃO 4
var resposta4 = "B4"; // Resposta correta
$("input[name=questao4]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps4 = $("input[name=questao4]:checked");
  if (resps4.length) {
    $("#feedback4").removeClass("escondeFeedback");
    resps4.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "B4") {
      $("#feedback4").addClass("resposta-incorreta");
      $("#feedback4").removeClass("resposta-correta");
      $("input[name=questao4]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback4").removeClass("resposta-incorreta");
      $("#feedback4").addClass("resposta-correta");
      $("input[name=questao4]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C4") {
      $("#A4").removeClass("resposta-incorreta");
      $("#B4").removeClass("resposta-correta");
      $("#C4").addClass("resposta-incorreta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "A4") {
      $("#A4").addClass("resposta-incorreta");
      $("#B4").removeClass("resposta-correta");
      $("#C4").removeClass("resposta-incorreta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "B4") {
      $("#A4").removeClass("resposta-incorreta");
      $("#B4").addClass("resposta-correta");
      $("#C4").removeClass("resposta-incorreta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "D4") {
      $("#A4").removeClass("resposta-incorreta");
      $("#B4").removeClass("resposta-correta");
      $("#C4").removeClass("resposta-incorreta");
      $("#D4").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta4 == value) {
      mensagem =
        "Correta.A Leishmaniose Visceral afeta órgãos internos, principalmente fígado e baço, causando hepatoesplenomegalia. ";
    } else if (value == "B4") {
      mensagem = "Falsa. ";
    } else if (value == "C4") {
      mensagem = "Falsa. ";
    } else if (value == "D4") {
      mensagem = "Falsa. ";
    } else if (value == "A4") {
      mensagem = "Falsa. ";
    }

    $("#mensagem4").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem4").empty();
  }
});

// MÓDULO 1 QUESTÃO 5
var resposta5 = "B5"; // Resposta correta
$("input[name=questao5]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps5 = $("input[name=questao5]:checked");
  if (resps5.length) {
    $("#feedback5").removeClass("escondeFeedback");
    resps5.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "B5") {
      $("#feedback5").addClass("resposta-incorreta");
      $("#feedback5").removeClass("resposta-correta");
      $("input[name=questao5]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback5").removeClass("resposta-incorreta");
      $("#feedback5").addClass("resposta-correta");
      $("input[name=questao5]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C5") {
      $("#A5").removeClass("resposta-incorreta");
      $("#B5").removeClass("resposta-correta");
    } else if (value === "A5") {
      $("#A5").addClass("resposta-incorreta");
      $("#B5").removeClass("resposta-correta");
    } else if (value === "B5") {
      $("#A5").removeClass("resposta-incorreta");
      $("#B5").addClass("resposta-correta");
    } else if (value === "D5") {
      $("#A5").removeClass("resposta-incorreta");
      $("#B5").removeClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta5 == value) {
      mensagem =
        "Correta. A transmissão ocorre exclusivamente pela picada de flebotomíneos infectados, não havendo transmissão direta entre pessoas.  ";
    } else if (value == "A5") {
      mensagem = "Falsa. ";
    }

    $("#mensagem5").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem5").empty();
  }
});
// MÓDULO 1 QUESTÃO 6
var resposta6 = "A6"; // Resposta correta
$("input[name=questao6]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps6 = $("input[name=questao6]:checked");
  if (resps6.length) {
    $("#feedback6").removeClass("escondeFeedback");
    resps6.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A6") {
      $("#feedback6").addClass("resposta-incorreta");
      $("#feedback6").removeClass("resposta-correta");
      $("input[name=questao6]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback6").removeClass("resposta-incorreta");
      $("#feedback6").addClass("resposta-correta");
      $("input[name=questao6]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C6") {
      $("#A6").removeClass("resposta-correta");
      $("#B6").removeClass("resposta-incorreta");
      $("#C6").addClass("resposta-incorreta");
      $("#D6").removeClass("resposta-incorreta");
    } else if (value === "A6") {
      $("#A6").addClass("resposta-correta");
      $("#B6").removeClass("resposta-incorreta");
      $("#C6").removeClass("resposta-incorreta");
      $("#D6").removeClass("resposta-incorreta");
    } else if (value === "B6") {
      $("#A6").removeClass("resposta-correta");
      $("#B6").addClass("resposta-incorreta");
      $("#C6").removeClass("resposta-incorreta");
      $("#D6").removeClass("resposta-incorreta");
    } else if (value === "D6") {
      $("#A6").removeClass("resposta-correta");
      $("#B6").removeClass("resposta-incorreta");
      $("#C6").removeClass("resposta-incorreta");
      $("#D6").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta6 == value) {
      mensagem =
        "Correta. As leishmanioses são divididas em Leishmaniose Visceral (LV) e Leishmaniose Tegumentar (LT), dependendo dos tecidos afetados.  ";
    } else if (value == "B6") {
      mensagem = "Falsa. ";
    } else if (value == "C6") {
      mensagem = "Falsa. ";
    } else if (value == "D6") {
      mensagem = "Falsa. ";
    }

    $("#mensagem6").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem6").empty();
  }
});
// MÓDULO 1 QUESTÃO 7
var resposta7 = "C7"; // Resposta correta
$("input[name=questao7]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps7 = $("input[name=questao7]:checked");
  if (resps7.length) {
    $("#feedback7").removeClass("escondeFeedback");
    resps7.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "C7") {
      $("#feedback7").addClass("resposta-incorreta");
      $("#feedback7").removeClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8072C" });
    } else {
      $("#feedback7").removeClass("resposta-incorreta");
      $("#feedback7").addClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").addClass("resposta-correta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "A7") {
      $("#A7").addClass("resposta-incorreta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").removeClass("resposta-correta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "B7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").addClass("resposta-incorreta");
      $("#C7").removeClass("resposta-correta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "D7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").removeClass("resposta-correta");
      $("#D7").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta7 == value) {
      mensagem =
        "Correta. Cães domésticos são importantes reservatórios da <i>Leishmania</i> infantum, especialmente na urbanização da doença.   ";
    } else if (value == "B7") {
      mensagem = "Falsa. ";
    } else if (value == "A7") {
      mensagem = "Falsa. ";
    } else if (value == "D7") {
      mensagem = "Falsa. ";
    }

    $("#mensagem7").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem7").empty();
  }
});

// MÓDULO 1 QUESTÃO 8
var resposta8 = "B8"; // Resposta correta
$("input[name=questao8]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps8 = $("input[name=questao8]:checked");
  if (resps8.length) {
    $("#feedback8").removeClass("escondeFeedback");
    resps8.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "B8") {
      $("#feedback8").addClass("resposta-incorreta");
      $("#feedback8").removeClass("resposta-correta");
      $("input[name=questao8]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback8").removeClass("resposta-incorreta");
      $("#feedback8").addClass("resposta-correta");
      $("input[name=questao8]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C8") {
      $("#A8").removeClass("resposta-incorreta");
      $("#B8").removeClass("resposta-correta");
    } else if (value === "A8") {
      $("#A8").addClass("resposta-incorreta");
      $("#B8").removeClass("resposta-correta");
    } else if (value === "B8") {
      $("#A8").removeClass("resposta-incorreta");
      $("#B8").addClass("resposta-correta");
    } else if (value === "D8") {
      $("#A8").removeClass("resposta-incorreta");
      $("#B8").removeClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta8 == value) {
      mensagem =
        "Correta. A leishmaniose tegumentar pode apresentar formas mucosas ou difusas, além das úlcerações clássicas na pele. ";
    } else if (value == "A8") {
      mensagem = "Falsa. ";
    }

    $("#mensagem8").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem8").empty();
  }
});
// MÓDULO 1 QUESTÃO 9
var resposta9 = "B9"; // Resposta correta
$("input[name=questao9]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps9 = $("input[name=questao9]:checked");
  if (resps9.length) {
    $("#feedback9").removeClass("escondeFeedback");
    resps9.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "B9") {
      $("#feedback9").addClass("resposta-incorreta");
      $("#feedback9").removeClass("resposta-correta");
      $("input[name=questao9]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8092C" });
    } else {
      $("#feedback9").removeClass("resposta-incorreta");
      $("#feedback9").addClass("resposta-correta");
      $("input[name=questao9]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C9") {
      $("#A9").removeClass("resposta-incorreta");
      $("#B9").removeClass("resposta-correta");
      $("#C9").addClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
    } else if (value === "A9") {
      $("#A9").addClass("resposta-incorreta");
      $("#B9").removeClass("resposta-correta");
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
    } else if (value === "B9") {
      $("#A9").removeClass("resposta-incorreta");
      $("#B9").addClass("resposta-correta");
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
    } else if (value === "D9") {
      $("#A9").removeClass("resposta-incorreta");
      $("#B9").removeClass("resposta-correta");
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta9 == value) {
      mensagem =
        "Correta. A leishmaniose visceral é mais prevalente no Nordeste e Centro Oeste, mas sua distribuição tem se expandido.   ";
    } else if (value == "C9") {
      mensagem = "Falsa. ";
    } else if (value == "A9") {
      mensagem = "Falsa. ";
    } else if (value == "D9") {
      mensagem = "Falsa. ";
    }

    $("#mensagem9").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem9").empty();
  }
});
// MÓDULO 1 QUESTÃO 10
var resposta10 = "D10"; // Resposta correta
$("input[name=questao10]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps10 = $("input[name=questao10]:checked");
  if (resps10.length) {
    $("#feedback10").removeClass("escondeFeedback");
    resps10.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "D10") {
      $("#feedback10").addClass("resposta-incorreta");
      $("#feedback10").removeClass("resposta-correta");
      $("input[name=questao10]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback10").removeClass("resposta-incorreta");
      $("#feedback10").addClass("resposta-correta");
      $("input[name=questao10]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C10") {
      $("#A10").removeClass("resposta-incorreta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").addClass("resposta-incorreta");
      $("#D10").removeClass("resposta-correta");
    } else if (value === "A10") {
      $("#A10").addClass("resposta-incorreta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").removeClass("resposta-correta");
    } else if (value === "B10") {
      $("#A10").removeClass("resposta-incorreta");
      $("#B10").addClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").removeClass("resposta-correta");
    } else if (value === "D10") {
      $("#A10").removeClass("resposta-incorreta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").addClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta10 == value) {
      mensagem =
        "Correta. Fatores ambientais, como desmatamento, urbanização e mudanças climáticas, influenciam a expansão da leishmaniose   ";
    } else if (value == "B10") {
      mensagem = "Falsa. ";
    } else if (value == "A10") {
      mensagem = "Falsa. ";
    } else if (value == "C10") {
      mensagem = "Falsa. ";
    }

    $("#mensagem10").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem10").empty();
  }
});
