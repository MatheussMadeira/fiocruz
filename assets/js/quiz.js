// QUESTÃO 1
var resposta = "C1"; // Resposta correta
$("input[name=questao1]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps = $("input[name=questao1]:checked");
    if (resps.length) {
        $("#feedback1").removeClass("escondeFeedback")
        resps.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "C1") {
            $("#feedback1").addClass("resposta-incorreta");
            $("#feedback1").removeClass("resposta-correta");
            $("input[name=questao1]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback1").removeClass("resposta-incorreta");
            $("#feedback1").addClass("resposta-correta");
            $("input[name=questao1]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
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
        resposta == value ? mensagem = "A triagem CLIA positiva indica a presença de anticorpos contra HTLV. O Western Blotting indeterminado não fornece uma confirmação clara, mas a PCR positiva para HTLV-2 confirma a presença do material genético do HTLV-2. Assim, a interpretação final é positiva para HTLV-2."
            : mensagem = "Resposta incorreta.";
        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// QUESTÃO 2
var resposta2 = "C2"; // Resposta correta
$("input[name=questao2]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps2 = $("input[name=questao2]:checked");
    if (resps2.length) {
        $("#feedback2").removeClass("escondeFeedback")
        resps2.each(function () {
            // concatena os values
            value += $(this).val();
        });
        // Altera cor mensagem da resposta
        if (value !== "C2") {
            $("#feedback2").addClass("resposta-incorreta");
            $("#feedback2").removeClass("resposta-correta");
            $("input[name=questao2]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback2").removeClass("resposta-incorreta");
            $("#feedback2").addClass("resposta-correta");
            $("input[name=questao2]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "C2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").addClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").addClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "D2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").addClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "E2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta2 == value ? mensagem = "A triagem CLIA positiva indica a presença de anticorpos contra HTLV. A presença das proteínas p19, p24, GD 21 e rgp46-I no Western Blotting, combinada com a PCR positiva para HTLV-1, confirma a infecção por HTLV-1. Portanto, a interpretação final é positiva para HTLV-1." :
            mensagem = "Resposta incorreta.";
        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// QUESTÃO 3
var resposta3 = "B3"; // Resposta correta
$("input[name=questao3]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps3 = $("input[name=questao3]:checked");
    if (resps3.length) {
        $("#feedback3").removeClass("escondeFeedback")
        resps3.each(function () {
            // concatena os values
            value += $(this).val();
        });
        // Altera cor mensagem da resposta
        if (value !== "B3") {
            $("#feedback3").addClass("resposta-incorreta");
            $("#feedback3").removeClass("resposta-correta");
            $("input[name=questao3]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });
        } else {
            $("#feedback3").removeClass("resposta-incorreta");
            $("#feedback3").addClass("resposta-correta");
            $("input[name=questao3]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "C3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-correta");
            $("#C3").addClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta");
            $("#B3").removeClass("resposta-correta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").addClass("resposta-correta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "D3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-correta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").addClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "E3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-correta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").addClass("resposta-incorreta");
        }

        var mensagem = "";
        resposta3 == value ? mensagem = "Triagem CLIA positiva sugere a presença de anticorpos contra HTLV. No entanto, a ausência de reatividade no Western Blotting indica que não foram detectadas as proteínas virais específicas associadas ao HTLV. Portanto, a interpretação final é negativa para HTLV, pois o Western Blotting não confirmou a presença do vírus e o resultado do CLIA é considerado falso positivo."
            : mensagem = "Resposta incorreta.";
        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});