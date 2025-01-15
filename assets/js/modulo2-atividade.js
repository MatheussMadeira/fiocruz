// MÓDULO 2 QUESTÃO 1
var resposta = "A1"; // Resposta correta
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

        if (value !== "A1") {
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

        if (value === "B1") {
            $("#B1").addClass("resposta-incorreta");
            $("#A1").removeClass("resposta-correta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "A1") {
            $("#B1").removeClass("resposta-incorreta");
            $("#A1").addClass("resposta-correta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "C1") {
            $("#B1").removeClass("resposta-incorreta");
            $("#A1").removeClass("resposta-correta");
            $("#C1").addClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "D1") {
            $("#B1").removeClass("resposta-incorreta");
            $("#A1").removeClass("resposta-correta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").addClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "E1") {
            $("#B1").removeClass("resposta-incorreta");
            $("#A1").removeClass("resposta-correta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta == value) {
            mensagem = "Correta. As principais dificuldades envolvem a falta de conhecimento e conscientização sobre o HTLV entre profissionais de saúde e a população geral, recursos limitados destinados especificamente para o controle do HTLV, e ausência de políticas e diretrizes bem definidas."
        } else if (value == "B1") {
            mensagem = "Falsa. O excesso de informações sobre o HTLV disponíveis para a população não é uma barreira enfrentada."
        } else if (value == "C1") {
            mensagem = "Falsa. Não há restrições legais para a testagem do HTLV em pacientes."
        } else if (value == "D1") {
            mensagem = "Falsa. Não há falta de demanda da população por testagem do HTLV."
        } else if (value == "E1") {
            mensagem = "Falsa. Não há excesso de diagnósticos incorretos."
        }

        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 2 QUESTÃO 2
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
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-correta");
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").addClass("resposta-incorreta");
            $("#C2").removeClass("resposta-incorreta");
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
            mensagem = "Correta. Exato, todas as alternativas acima podem contribuir para mitigar a disseminação do vírus nas comunidades vulneráveis."
        } else if (value == "A2") {
            mensagem = "Sim, a conscientização da população acerca do vírus e de seus modos de transmissão também pode contribuir para mitigar a disseminação do vírus nas comunidades vulneráveis."
        } else if (value == "B2") {
            mensagem = "Sim, o rastreio da infecção também pode contribuir para mitigar a disseminação do vírus nas comunidades vulneráveis."
        } else if (value == "C2") {
            mensagem = "Sim, a triagem pré-natal também pode contribuir para mitigar a disseminação do vírus nas comunidades vulneráveis."
        } else if (value == "D2") {
            mensagem = "Sim, o incentivo ao uso de preservativos nas relações sexuais também pode contribuir para mitigar a disseminação do vírus nas comunidades vulneráveis."
        }

        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 2 QUESTÃO 3
var resposta3 = "D3"; // Resposta correta
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

        if (value !== "D3") {
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
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").addClass("resposta-incorreta");
            $("#D3").removeClass("resposta-correta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-correta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").addClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-correta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "D3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").addClass("resposta-correta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "E3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-incorreta");
            $("#D3").removeClass("resposta-correta");
            $("#E3").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta3 == value) {
            mensagem = "Correta. Apesar de ser possível a transmissão vertical do HTLV-1 durante a gestação e no momento do parto, a transmissão do HTLV-1 de mãe para filho ocorre principalmente pelo leite materno. Por esta razão, o aleitamento materno é contraindicado para mães vivendo com HTLV-1."
        } else if (value == "A3") {
            mensagem = "Falsa. Apesar de ser possível a transmissão vertical do HTLV-1 durante a gestação e no momento do parto, a transmissão do HTLV-1 de mãe para filho ocorre principalmente pelo leite materno. Por esta razão, o aleitamento materno é contraindicado para mães vivendo com HTLV-1."
        } else if (value == "B3") {
            mensagem = "Falsa. Apesar de ser possível a transmissão vertical do HTLV-1 durante a gestação e no momento do parto, a transmissão do HTLV-1 de mãe para filho ocorre principalmente pelo leite materno. Por esta razão, o aleitamento materno é contraindicado para mães vivendo com HTLV-1."
        } else if (value == "C3") {
            mensagem = "Falsa. Aleitamento materno por período prolongado aumenta de forma significativa o risco de transmissão do HTLV-1. Sendo assim, o leite materno é considerado a principal forma de transmissão do HTLV-1 de mãe para filho."
        } else if (value == "E3") {
            mensagem = "Falsa."
        }

        $("#mensagem3").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem3").empty();
    }
});

// MÓDULO 2 QUESTÃO 4
var resposta4 = "B4"; // Resposta correta
$("input[name=questao4]").on("click", function () {
    var value = "";
    // seleciona apenas o que foi checado
    var resps4 = $("input[name=questao4]:checked");
    if (resps4.length) {
        $("#feedback4 ").removeClass("escondeFeedback")
        resps4.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "B4") {
            $("#feedback4").addClass("resposta-incorreta");
            $("#feedback4").removeClass("resposta-correta");
            $("input[name=questao4]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#F8062C' });

        } else {
            $("#feedback4").removeClass("resposta-incorreta");
            $("#feedback4").addClass("resposta-correta");
            $("input[name=questao4]").css({ 'background-color': '', 'border': '' });
            $(this).css({ 'background-color': '#0ABC3A' });
        }

        if (value === "A4") {
            $("#A4").addClass("resposta-incorreta");
            $("#B4").removeClass("resposta-correta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "B4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").addClass("resposta-correta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "C4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-correta");
            $("#C4").addClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "D4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-correta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").addClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "E4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-correta");
            $("#C4").removeClass("resposta-incorreta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta4 == value) {
            mensagem = "Correta. Atuar como intermediárias entre a população afetada e os sistemas de saúde: OSCs desempenham um papel crucial ao conectar os pacientes com os serviços de saúde e defendendo seus direitos."
        } else if (value == "A4") {
            mensagem = "Falsa. Realizar diagnósticos clínicos: Diagnósticos clínicos são realizados por profissionais de saúde, não por OSCs."
        } else if (value == "C4") {
            mensagem = "Falsa. Fornecer financiamento direto aos pacientes: Embora possam auxiliar na obtenção de recursos, OSCs geralmente não fornecem financiamento direto."
        } else if (value == "D4") {
            mensagem = "Falsa. Desenvolver vacinas para o HTLV: O desenvolvimento de vacinas é feito por instituições de pesquisa e empresas farmacêuticas, não por OSCs."
        } else if (value == "E4") {
            mensagem = "Falsa. Promover campanhas de conscientização sobre HTLV: Embora as OSCs também realizem campanhas de conscientização, seu papel principal é atuar como intermediárias entre a população e os sistemas de saúde."
        }

        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }

});