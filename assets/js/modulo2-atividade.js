// MÓDULO 2 QUESTÃO 1
var resposta1 = "A1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps1 = $("input[name=questao1]:checked");
  if (resps1.length) {
    $("#feedback1").removeClass("escondeFeedback");
    resps1.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A1") {
      $("#feedback1").addClass("resposta-incorreta");
      $("#feedback1").removeClass("resposta-correta");
      $("input[name=questao1]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8012C" });
    } else {
      $("#feedback1").removeClass("resposta-incorreta");
      $("#feedback1").addClass("resposta-correta");
      $("input[name=questao1]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "A1") {
      $("#A1").addClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "B1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").addClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    } else if (value === "D1") {
      $("#A1").removeClass("resposta-correta");
      $("#B1").removeClass("resposta-incorreta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta1 == value) {
      mensagem =
        "Correta. Patogenia descreve como um agente infeccioso causa doença e como o organismo reage.   ";
    } else if (value == "B1") {
      mensagem = "Falsa. ";
    } else if (value == "C1") {
      mensagem = "Falsa. ";
    } else if (value == "D1") {
      mensagem = "Falsa. ";
    }

    $("#mensagem1").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem1").empty();
  }
});

// MÓDULO 2 QUESTÃO 2
var resposta2 = "A2"; // Resposta correta
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
    if (value !== "A2") {
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

    if (value === "A2") {
      $("#A2").addClass("resposta-correta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").removeClass("resposta-incorreta");
      $("#D2").removeClass("resposta-incorreta");
      $("#E2").removeClass("resposta-incorreta");
    } else if (value === "C2") {
      $("#A2").removeClass("resposta-correta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").addClass("resposta-incorreta");
      $("#D2").removeClass("resposta-incorreta");
      $("#E2").removeClass("resposta-incorreta");
    } else if (value === "B2") {
      $("#A2").removeClass("resposta-correta");
      $("#B2").addClass("resposta-incorreta");
      $("#C2").removeClass("resposta-incorreta");
      $("#D2").removeClass("resposta-incorreta");
      $("#E2").removeClass("resposta-incorreta");
    } else if (value === "D2") {
      $("#A2").removeClass("resposta-correta");
      $("#B2").removeClass("resposta-incorreta");
      $("#C2").removeClass("resposta-incorreta");
      $("#D2").addClass("resposta-incorreta");
      $("#E2").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta2 == value) {
      mensagem =
        "Correta. Os flebotomíneos, conhecidos como 'mosquito-palha', são os vetores das leishmanioses. ";
    } else if (value == "C2") {
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

// MÓDULO 2 QUESTÃO 3
var resposta3 = "A3"; // Resposta correta
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
    if (value !== "A3") {
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

    if (value === "A3") {
      $("#A3").addClass("resposta-correta");
      $("#B3").removeClass("resposta-incorreta");
    } else if (value === "B3") {
      $("#A3").removeClass("resposta-correta");
      $("#B3").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta3 == value) {
      mensagem =
        "Correta. Muitos indivíduos infectados podem não apresentar sintomas, especialmente em fases iniciais da infecção.  ";
    } else if (value == "B3") {
      mensagem = "Falsa. ";
    }

    $("#mensagem3").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem3").empty();
  }
});

// MÓDULO 2 QUESTÃO 4
var resposta4 = "C4"; // Resposta correta
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
    if (value !== "C4") {
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
      $("#B4").removeClass("resposta-incorreta");
      $("#C4").addClass("resposta-correta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "A4") {
      $("#A4").addClass("resposta-incorreta");
      $("#B4").removeClass("resposta-incorreta");
      $("#C4").removeClass("resposta-correta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "B4") {
      $("#A4").removeClass("resposta-incorreta");
      $("#B4").addClass("resposta-incorreta");
      $("#C4").removeClass("resposta-correta");
      $("#D4").removeClass("resposta-incorreta");
    } else if (value === "D4") {
      $("#A4").removeClass("resposta-incorreta");
      $("#B4").removeClass("resposta-incorreta");
      $("#C4").removeClass("resposta-correta");
      $("#D4").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta4 == value) {
      mensagem =
        "Correta.  A Leishmaniose Visceral afeta principalmente órgãos internos e não está associada a dores articulares.  ";
    } else if (value == "B4") {
      mensagem = "Falsa. ";
    } else if (value == "A4") {
      mensagem = "Falsa. ";
    } else if (value == "D4") {
      mensagem = "Falsa. ";
    }

    $("#mensagem4").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem4").empty();
  }
});

// MÓDULO 2 QUESTÃO 5
var resposta5 = "A5"; // Resposta correta
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
    if (value !== "A5") {
      $("#feedback5").addClass("resposta-incorreta");
      $("#feedback5").removeClass("resposta-correta");
      $("input[name=questao5]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8065C" });
    } else {
      $("#feedback5").removeClass("resposta-incorreta");
      $("#feedback5").addClass("resposta-correta");
      $("input[name=questao5]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A5") {
      $("#A5").addClass("resposta-correta");
      $("#B5").removeClass("resposta-incorreta");
      $("#C5").removeClass("resposta-incorreta");
      $("#D5").removeClass("resposta-incorreta");
      $("#E5").removeClass("resposta-incorreta");
    } else if (value === "C5") {
      $("#A5").removeClass("resposta-correta");
      $("#B5").removeClass("resposta-incorreta");
      $("#C5").addClass("resposta-incorreta");
      $("#D5").removeClass("resposta-incorreta");
      $("#E5").removeClass("resposta-incorreta");
    } else if (value === "B5") {
      $("#A5").removeClass("resposta-correta");
      $("#B5").addClass("resposta-incorreta");
      $("#C5").removeClass("resposta-incorreta");
      $("#D5").removeClass("resposta-incorreta");
      $("#E5").removeClass("resposta-incorreta");
    } else if (value === "D5") {
      $("#A5").removeClass("resposta-correta");
      $("#B5").removeClass("resposta-incorreta");
      $("#C5").removeClass("resposta-incorreta");
      $("#D5").addClass("resposta-incorreta");
      $("#E5").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta5 == value) {
      mensagem =
        "Correta. Os flebotomíneos, conhecidos como 'mosquito-palha', são os vetores das leishmanioses. ";
    } else if (value == "C5") {
      mensagem = "Falsa. ";
    } else if (value == "B5") {
      mensagem = "Falsa. ";
    } else if (value == "D5") {
      mensagem = "Falsa. ";
    }

    $("#mensagem5").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem5").empty();
  }
});
// MÓDULO 2 QUESTÃO 6
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

    if (value === "B6") {
      $("#A6").removeClass("resposta-correta");
      $("#B6").addClass("resposta-incorreta");
    } else if (value === "A6") {
      $("#A6").addClass("resposta-correta");
      $("#B6").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta6 == value) {
      mensagem =
        "Correta. Quando afeta a mucosa do nariz e garganta, pode causar obstrução e dificuldades na fala e respiração.   ";
    } else if (value == "B6") {
      mensagem = "Falsa. ";
    }

    $("#mensagem6").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem6").empty();
  }
});
// MÓDULO 2 QUESTÃO 7
var resposta7 = "A7"; // Resposta correta
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
    if (value !== "A7") {
      $("#feedback7").addClass("resposta-incorreta");
      $("#feedback7").removeClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8067C" });
    } else {
      $("#feedback7").removeClass("resposta-incorreta");
      $("#feedback7").addClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A7") {
      $("#A7").addClass("resposta-correta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
      $("#E7").removeClass("resposta-incorreta");
    } else if (value === "C7") {
      $("#A7").removeClass("resposta-correta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").addClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
      $("#E7").removeClass("resposta-incorreta");
    } else if (value === "B7") {
      $("#A7").removeClass("resposta-correta");
      $("#B7").addClass("resposta-incorreta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
      $("#E7").removeClass("resposta-incorreta");
    } else if (value === "D7") {
      $("#A7").removeClass("resposta-correta");
      $("#B7").removeClass("resposta-incorreta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").addClass("resposta-incorreta");
      $("#E7").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta7 == value) {
      mensagem =
        "Correta. Essa forma se caracteriza por múltiplas lesões cutâneas e baixa resposta imunológica contra o parasito. ";
    } else if (value == "C7") {
      mensagem = "Falsa. ";
    } else if (value == "B7") {
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
// MÓDULO 2 QUESTÃO 8
var resposta8 = "A8"; // Resposta correta
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
    if (value !== "A8") {
      $("#feedback8").addClass("resposta-incorreta");
      $("#feedback8").removeClass("resposta-correta");
      $("input[name=questao8]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8068C" });
    } else {
      $("#feedback8").removeClass("resposta-incorreta");
      $("#feedback8").addClass("resposta-correta");
      $("input[name=questao8]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A8") {
      $("#A8").addClass("resposta-correta");
      $("#B8").removeClass("resposta-incorreta");
      $("#C8").removeClass("resposta-incorreta");
      $("#D8").removeClass("resposta-incorreta");
      $("#E8").removeClass("resposta-incorreta");
    } else if (value === "C8") {
      $("#A8").removeClass("resposta-correta");
      $("#B8").removeClass("resposta-incorreta");
      $("#C8").addClass("resposta-incorreta");
      $("#D8").removeClass("resposta-incorreta");
      $("#E8").removeClass("resposta-incorreta");
    } else if (value === "B8") {
      $("#A8").removeClass("resposta-correta");
      $("#B8").addClass("resposta-incorreta");
      $("#C8").removeClass("resposta-incorreta");
      $("#D8").removeClass("resposta-incorreta");
      $("#E8").removeClass("resposta-incorreta");
    } else if (value === "D8") {
      $("#A8").removeClass("resposta-correta");
      $("#B8").removeClass("resposta-incorreta");
      $("#C8").removeClass("resposta-incorreta");
      $("#D8").addClass("resposta-incorreta");
      $("#E8").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta8 == value) {
      mensagem =
        "Correta. A LV pode ser fatal se não tratada, afetando órgãos vitais como fígado e baço.  ";
    } else if (value == "C8") {
      mensagem = "Falsa. ";
    } else if (value == "B8") {
      mensagem = "Falsa. ";
    } else if (value == "D8") {
      mensagem = "Falsa. ";
    }

    $("#mensagem8").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem8").empty();
  }
});
// MODULO 2 QUESTÃO 9
var resposta9 = "A9"; // Resposta correta
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
    if (value !== "A9") {
      $("#feedback9").addClass("resposta-incorreta");
      $("#feedback9").removeClass("resposta-correta");
      $("input[name=questao9]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8069C" });
    } else {
      $("#feedback9").removeClass("resposta-incorreta");
      $("#feedback9").addClass("resposta-correta");
      $("input[name=questao9]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A9") {
      $("#A9").addClass("resposta-correta");
      $("#B9").removeClass("resposta-incorreta");
    } else if (value === "B9") {
      $("#A9").removeClass("resposta-correta");
      $("#B9").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta9 == value) {
      mensagem =
        "Correta. Pacientes com HIV têm maior risco de infecções graves devido à imunossupressão.   ";
    } else if (value == "B9") {
      mensagem = "Falsa. ";
    }

    $("#mensagem9").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem9").empty();
  }
});
// MODULO 2 QUESTÃO 10
var resposta10 = "A10"; // Resposta correta
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
    if (value !== "A10") {
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

    if (value === "A10") {
      $("#A10").addClass("resposta-correta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").removeClass("resposta-incorreta");
      $("#E10").removeClass("resposta-incorreta");
    } else if (value === "C10") {
      $("#A10").removeClass("resposta-correta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").addClass("resposta-incorreta");
      $("#D10").removeClass("resposta-incorreta");
      $("#E10").removeClass("resposta-incorreta");
    } else if (value === "B10") {
      $("#A10").removeClass("resposta-correta");
      $("#B10").addClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").removeClass("resposta-incorreta");
      $("#E10").removeClass("resposta-incorreta");
    } else if (value === "D10") {
      $("#A10").removeClass("resposta-correta");
      $("#B10").removeClass("resposta-incorreta");
      $("#C10").removeClass("resposta-incorreta");
      $("#D10").addClass("resposta-incorreta");
      $("#E10").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta10 == value) {
      mensagem =
        "Correta. A desnutrição compromete a resposta imunológica, aumentando o risco de formas graves da doença.   ";
    } else if (value == "C10") {
      mensagem = "Falsa. ";
    } else if (value == "B10") {
      mensagem = "Falsa. ";
    } else if (value == "D10") {
      mensagem = "Falsa. ";
    }

    $("#mensagem10").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem10").empty();
  }
});
