// MÓDULO 1 QUESTÃO 1
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

        if (resposta == value) {
            mensagem = "Correta. Estima-se que entre 800 mil e 2,5 milhões de pessoas vivam com HTLV no Brasil, tornando o país o com maior número de casos no mundo."
        } else if (value == "A1") {
            mensagem = "Falsa. O Brasil tem a maior taxa de prevalência global de HTLV, com os dados mais altos na região Nordeste do país, não na região Sul."
        } else if (value == "B1") {
            mensagem = "Falsa. A prevalência de HTLV na região Sul é muito baixa, com uma taxa de apenas 0,04%, enquanto a região Nordeste, como a Bahia, pode ter uma taxa de até 1,8%."
        } else if (value == "D1") {
            mensagem = "Falsa. A triagem para infecção pelo HTLV em doadores de sangue tornou-se obrigatória a partir de 1993, não de 1983."
        } else if (value == "E1") {
            mensagem = "Falsa. A maioria dos dados de prevalência do HTLV é obtida em bancos de sangue, o que pode levar a uma subestimação dos números devido à natureza da triagem e à exclusão de grupos não representados nesses bancos."
        }

        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 1 QUESTÃO 2
var resposta2 = "E2"; // Resposta correta
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
        if (value !== "E2") {
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
            $("#C2").addClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-correta");
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-correta");
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").addClass("resposta-incorreta");
            $("#C2").removeClass("resposta-correta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-correta");
        } else if (value === "D2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").addClass("resposta-incorreta");
            $("#E2").removeClass("resposta-correta");
        } else if (value === "E2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-incorreta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").addClass("resposta-correta");
        }

        var mensagem = "";

        if (resposta2 == value) {
            mensagem = "Correta. O texto indica que o HTLV-1 pode ser transmitido verticalmente, da mãe para o filho."
        } else if (value == "A2") {
            mensagem = "Falsa. O HTLV-1 compartilha vias de transmissão com diversos patógenos, incluindo ISTs e doenças transmitidas pelo sangue."
        } else if (value == "B2") {
            mensagem = "Falsa. O HTLV-1 infecta principalmente os linfócitos T CD4+, não os linfócitos B."
        } else if (value == "C2") {
            mensagem = "Falsa. O HTLV-1 está associado a infecções sexualmente transmissíveis (ISTs), conforme mencionado no texto."
        } else if (value == "D2") {
            mensagem = "Falsa. A infecção pelo HTLV-1 resulta em uma infecção crônica e persistente, não uma infecção aguda e autolimitada."
        }

        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 1 QUESTÃO 3
var resposta3 = "A3"; // Resposta correta
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
        if (value !== "A3") {
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
            $("#A3").removeClass("resposta-correta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").addClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "A3") {
            $("#A3").addClass("resposta-correta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-correta");
            $("#B3").addClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "D3") {
            $("#A3").removeClass("resposta-correta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").addClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "E3") {
            $("#A3").removeClass("resposta-correta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta3 == value) {
            mensagem = "Correta. CLIA: Usado para triagem inicial devido à sua alta sensibilidade e especificidade."
        } else if (value == "B3") {
            mensagem = "Falsa. Western Blot: Usado para confirmação, não como método inicial de triagem."
        } else if (value == "C3") {
            mensagem = "Falsa. PCR: É utilizado para detectar material genético viral, não para a triagem inicial de anticorpos."
        } else if (value == "D3") {
            mensagem = "Falsa. Hibridização in situ: Não é usada para triagem de anticorpos."
        } else if (value == "E3") {
            mensagem = "Falsa. Ensaio de Linha: Usado para confirmação, não como método inicial de triagem."
        }

        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});