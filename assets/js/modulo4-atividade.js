// QUIZ QUESTÃO 1
var resposta1 = "B1"; // Resposta correta
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
    if (value !== "B1") {
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

    if (value === "A1") {
      $("#A1").addClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    }
    if (value === "B1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").addClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    }
    if (value === "C1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").addClass("resposta-incorreta");
      $("#D1").removeClass("resposta-incorreta");
    }
    if (value === "D1") {
      $("#A1").removeClass("resposta-incorreta");
      $("#B1").removeClass("resposta-correta");
      $("#C1").removeClass("resposta-incorreta");
      $("#D1").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta1 == value) {
      mensagem =
        "Correta. O controle do vetor e a redução de criadouros são as estratégias mais eficazes para prevenção da leishmaniose.   ";
    } else if (value == "A1") {
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

// QUIZ QUESTÃO 2
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
    } else if (value === "B2") {
      $("#A2").removeClass("resposta-correta");
      $("#B2").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta2 == value) {
      mensagem =
        "Correta. As coleiras impregnadas reduzem a chance de picadas por flebotomíneos infectados, protegendo os cães. ";
    } else if (value == "B2") {
      mensagem = "Falsa. ";
    }

    $("#mensagem2").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem2").empty();
  }
});

// QUIZ QUESTÃO 3
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
      $(this).css({ "background-color": "#F8032C" });
    } else {
      $("#feedback3").removeClass("resposta-incorreta");
      $("#feedback3").addClass("resposta-correta");
      $("input[name=questao3]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A3") {
      $("#A3").addClass("resposta-correta");
      $("#B3").removeClass("resposta-incorreta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    }
    if (value === "B3") {
      $("#A3").removeClass("resposta-correta");
      $("#B3").addClass("resposta-incorreta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    }
    if (value === "C3") {
      $("#A3").removeClass("resposta-correta");
      $("#B3").removeClass("resposta-incorreta");
      $("#C3").addClass("resposta-incorreta");
      $("#D3").removeClass("resposta-incorreta");
    }
    if (value === "D3") {
      $("#A3").removeClass("resposta-correta");
      $("#B3").removeClass("resposta-incorreta");
      $("#C3").removeClass("resposta-incorreta");
      $("#D3").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta3 == value) {
      mensagem =
        "Correta.  Habitações em áreas florestais podem aumentar o contato com os vetores da Leishmaniose Tegumentar.  ";
    } else if (value == "B3") {
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

// QUIZ QUESTÃO 4
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
        "Correta.  Os cães são importantes reservatórios do parasito, contribuindo para a manutenção da infecção na comunidade. ";
    } else if (value == "A4") {
      mensagem = "Falsa. ";
    } else if (value == "C4") {
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

// QUIZ QUESTÃO 5
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
      $(this).css({ "background-color": "#F8065C" });
    } else {
      $("#feedback5").removeClass("resposta-incorreta");
      $("#feedback5").addClass("resposta-correta");
      $("input[name=questao5]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A5") {
      $("#A5").addClass("resposta-incorreta");
      $("#B5").removeClass("resposta-correta");
    } else if (value === "B5") {
      $("#A5").removeClass("resposta-incorreta");
      $("#B5").addClass("resposta-correta");
    }

    var mensagem = "";

    if (resposta5 == value) {
      mensagem =
        "Correta. O controle eficaz da leishmaniose depende de múltiplas estratégias, incluindo manejo ambiental e controle do vetor. ";
    } else if (value == "A5") {
      mensagem = "Falsa. ";
    }

    $("#mensagem5").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem5").empty();
  }
});
// QUIZ QUESTÃO 6
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
        "Correta. Repelentes e telas reduzem o contato com vetores, prevenindo infecções.  ";
    } else if (value == "C6") {
      mensagem = "Falsa. ";
    } else if (value == "B6") {
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
// QUIZ QUESTÃO 7
var resposta7 = "B7"; // Resposta correta
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
    if (value !== "B7") {
      $("#feedback7").addClass("resposta-incorreta");
      $("#feedback7").removeClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback7").removeClass("resposta-incorreta");
      $("#feedback7").addClass("resposta-correta");
      $("input[name=questao7]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "C7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").removeClass("resposta-correta");
      $("#C7").addClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "A7") {
      $("#A7").addClass("resposta-incorreta");
      $("#B7").removeClass("resposta-correta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "B7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").addClass("resposta-correta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").removeClass("resposta-incorreta");
    } else if (value === "D7") {
      $("#A7").removeClass("resposta-incorreta");
      $("#B7").removeClass("resposta-correta");
      $("#C7").removeClass("resposta-incorreta");
      $("#D7").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta7 == value) {
      mensagem =
        "Correta. O ciclo envolve múltiplos hospedeiros e vetores, dificultando o controle da doença.  ";
    } else if (value == "A7") {
      mensagem = "Falsa. ";
    } else if (value == "C7") {
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
// QUIZ QUESTÃO 8
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
    } else if (value === "B8") {
      $("#A8").removeClass("resposta-correta");
      $("#B8").addClass("resposta-incorreta");
    }
    var mensagem = "";

    if (resposta8 == value) {
      mensagem =
        "Correta. A conscientização da população é essencial para reduzir a transmissão da doença.";
    } else if (value == "B8") {
      mensagem = "Falsa. ";
    }

    $("#mensagem8").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem8").empty();
  }
});
// QUIZ QUESTÃO 9
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
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
      $("#E9").removeClass("resposta-incorreta");
    } else if (value === "C9") {
      $("#A9").removeClass("resposta-correta");
      $("#B9").removeClass("resposta-incorreta");
      $("#C9").addClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
      $("#E9").removeClass("resposta-incorreta");
    } else if (value === "B9") {
      $("#A9").removeClass("resposta-correta");
      $("#B9").addClass("resposta-incorreta");
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").removeClass("resposta-incorreta");
      $("#E9").removeClass("resposta-incorreta");
    } else if (value === "D9") {
      $("#A9").removeClass("resposta-correta");
      $("#B9").removeClass("resposta-incorreta");
      $("#C9").removeClass("resposta-incorreta");
      $("#D9").addClass("resposta-incorreta");
      $("#E9").removeClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta9 == value) {
      mensagem =
        "Correta. A PCR detecta DNA do parasito, sendo um dos métodos mais sensíveis para confirmação da infecção.   ";
    } else if (value == "C9") {
      mensagem = "Falsa. ";
    } else if (value == "B9") {
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

// QUIZ QUESTÃO 10
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
    } else if (value === "B10") {
      $("#A10").removeClass("resposta-correta");
      $("#B10").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta10 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B10") {
      mensagem = "Falsa. ";
    }

    $("#mensagem10").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem10").empty();
  }
});
// QUIZ QUESTÃO 11
var resposta11 = "A11"; // Resposta correta
$("input[name=questao11]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps11 = $("input[name=questao11]:checked");
  if (resps11.length) {
    $("#feedback11").removeClass("escondeFeedback");
    resps11.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A11") {
      $("#feedback11").addClass("resposta-incorreta");
      $("#feedback11").removeClass("resposta-correta");
      $("input[name=questao11]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback11").removeClass("resposta-incorreta");
      $("#feedback11").addClass("resposta-correta");
      $("input[name=questao11]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A11") {
      $("#A11").addClass("resposta-correta");
      $("#B11").removeClass("resposta-incorreta");
    } else if (value === "B11") {
      $("#A11").removeClass("resposta-correta");
      $("#B11").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta11 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B11") {
      mensagem = "Falsa. ";
    }

    $("#mensagem11").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem11").empty();
  }
});
// QUIZ QUESTÃO 12
var resposta12 = "A12"; // Resposta correta
$("input[name=questao12]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps12 = $("input[name=questao12]:checked");
  if (resps12.length) {
    $("#feedback12").removeClass("escondeFeedback");
    resps12.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A12") {
      $("#feedback12").addClass("resposta-incorreta");
      $("#feedback12").removeClass("resposta-correta");
      $("input[name=questao12]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback12").removeClass("resposta-incorreta");
      $("#feedback12").addClass("resposta-correta");
      $("input[name=questao12]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A12") {
      $("#A12").addClass("resposta-correta");
      $("#B12").removeClass("resposta-incorreta");
    } else if (value === "B12") {
      $("#A12").removeClass("resposta-correta");
      $("#B12").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta12 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B12") {
      mensagem = "Falsa. ";
    }

    $("#mensagem12").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem12").empty();
  }
});
// QUIZ QUESTÃO 13
var resposta13 = "A13"; // Resposta correta
$("input[name=questao13]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps13 = $("input[name=questao13]:checked");
  if (resps13.length) {
    $("#feedback13").removeClass("escondeFeedback");
    resps13.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A13") {
      $("#feedback13").addClass("resposta-incorreta");
      $("#feedback13").removeClass("resposta-correta");
      $("input[name=questao13]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback13").removeClass("resposta-incorreta");
      $("#feedback13").addClass("resposta-correta");
      $("input[name=questao13]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A13") {
      $("#A13").addClass("resposta-correta");
      $("#B13").removeClass("resposta-incorreta");
    } else if (value === "B13") {
      $("#A13").removeClass("resposta-correta");
      $("#B13").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta13 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B13") {
      mensagem = "Falsa. ";
    }

    $("#mensagem13").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem13").empty();
  }
});
// QUIZ QUESTÃO 14
var resposta14 = "A14"; // Resposta correta
$("input[name=questao14]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps14 = $("input[name=questao14]:checked");
  if (resps14.length) {
    $("#feedback14").removeClass("escondeFeedback");
    resps14.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A14") {
      $("#feedback14").addClass("resposta-incorreta");
      $("#feedback14").removeClass("resposta-correta");
      $("input[name=questao14]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback14").removeClass("resposta-incorreta");
      $("#feedback14").addClass("resposta-correta");
      $("input[name=questao14]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A14") {
      $("#A14").addClass("resposta-correta");
      $("#B14").removeClass("resposta-incorreta");
    } else if (value === "B14") {
      $("#A14").removeClass("resposta-correta");
      $("#B14").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta14 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B14") {
      mensagem = "Falsa. ";
    }

    $("#mensagem14").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem14").empty();
  }
});
// QUIZ QUESTÃO 15
var resposta15 = "A15"; // Resposta correta
$("input[name=questao15]").on("click", function () {
  var value = "";
  // seleciona apenas o que foi checado
  var resps15 = $("input[name=questao15]:checked");
  if (resps15.length) {
    $("#feedback15").removeClass("escondeFeedback");
    resps15.each(function () {
      // concatena os values
      value += $(this).val();
    });
    // Altera cor mensagem da resposta
    if (value !== "A15") {
      $("#feedback15").addClass("resposta-incorreta");
      $("#feedback15").removeClass("resposta-correta");
      $("input[name=questao15]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#F8062C" });
    } else {
      $("#feedback15").removeClass("resposta-incorreta");
      $("#feedback15").addClass("resposta-correta");
      $("input[name=questao15]").css({ "background-color": "", border: "" });
      $(this).css({ "background-color": "#0ABC3A" });
    }

    if (value === "A15") {
      $("#A15").addClass("resposta-correta");
      $("#B15").removeClass("resposta-incorreta");
    } else if (value === "B15") {
      $("#A15").removeClass("resposta-correta");
      $("#B15").addClass("resposta-incorreta");
    }

    var mensagem = "";

    if (resposta15 == value) {
      mensagem =
        "Correta. A biópsia permite identificar a presença do parasito nos tecidos cutâneos.   ";
    } else if (value == "B15") {
      mensagem = "Falsa. ";
    }

    $("#mensagem15").html(mensagem);
  } else {
    // esvazia a div de mensagem
    $("#mensagem15").empty();
  }
});
