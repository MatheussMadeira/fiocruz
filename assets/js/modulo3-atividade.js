// MÓDULO 2 QUESTÃO 1
var resposta = "B1"; // Resposta correta
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

        if (value !== "B1") {
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
            $("#B1").addClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "A1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").addClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "C1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").addClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "D1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").addClass("resposta-incorreta");
            $("#E1").removeClass("resposta-incorreta");
        } else if (value === "E1") {
            $("#B1").removeClass("resposta-correta");
            $("#A1").removeClass("resposta-incorreta");
            $("#C1").removeClass("resposta-incorreta");
            $("#D1").removeClass("resposta-incorreta");
            $("#E1").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta == value) {
            mensagem = "Correta. Não há recomendação de tratamento da infecção de HTLV com antirretroviais. As recomendações de prevenção de transmissão de HTLV previstas em PCDT são uso de preservativo, oferta de redução de danos e contra indicações à amamentação."
        } else if (value == "A1") {
            mensagem = "Falsa. A amamentação é contraindicada para crianças expostas ao HTLV, e recomenda-se o uso de medicações inibidoras da lactação e substituição de leite materno por fórmula infantil."
        } else if (value == "C1") {
            mensagem = "Falsa. O uso de preservativo em todas as relações é recomendado para prevenção de transmissão sexual do vírus HTLV e outras infecções sexualmente transmissíveis."
        } else if (value == "D1") {
            mensagem = "Falsa. A estratégia de redução de danos deve ser ofertada para pessoas que usam drogas injetáveis e é medida de prevenção de transmissão de HTLV."
        } else if (value == "E1") {
            mensagem = "Falsa. A amamentação é contraindicada para crianças expostas ao HTLV, e recomenda-se o uso de medicações inibidoras da lactação e substituição de leite materno por fórmula infantil."
        }

        $("#mensagem1").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem1").empty();
    }
});

// MÓDULO 2 QUESTÃO 2
var resposta2 = "B2"; // Resposta correta
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
        if (value !== "B2") {
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
            $("#B2").removeClass("resposta-correta");
            $("#C2").addClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "A2") {
            $("#A2").addClass("resposta-incorreta");
            $("#B2").removeClass("resposta-correta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "B2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").addClass("resposta-correta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "D2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-correta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").addClass("resposta-incorreta");
            $("#E2").removeClass("resposta-incorreta");
        } else if (value === "E2") {
            $("#A2").removeClass("resposta-incorreta");
            $("#B2").removeClass("resposta-correta");
            $("#C2").removeClass("resposta-incorreta");
            $("#D2").removeClass("resposta-incorreta");
            $("#E2").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta2 == value) {
            mensagem = "Correta. Garantia da atenção à saúde das crianças de zero a doze meses com qualidade e resolutividade e a garantia de acesso às ações do planejamento reprodutivo. – Não faz parte das diretrizes da Rede Cegonha na Linha do Cuidado às pessoas com HTLV. A diretriz correta é: garantia da atenção à saúde das crianças de zero a vinte e quatro meses com qualidade e resolutividade e a garantia de acesso às ações do planejamento reprodutivo."
        } else if (value == "A2") {
            mensagem = "Falsa. Garantia do acolhimento com avaliação e classificação de risco e vulnerabilidade. – Faz parte das diretrizes da Rede Cegonha na Linha do Cuidado às pessoas com HTLV"
        } else if (value == "C2") {
            mensagem = "Falsa. Ampliação do acesso e melhoria da qualidade do pré-natal. – Faz parte das diretrizes da Rede Cegonha na Linha do Cuidado às pessoas com HTLV"
        } else if (value == "D2") {
            mensagem = "Falsa. Garantia de vinculação da gestante à unidade de referência e ao transporte seguro. – Faz parte das diretrizes da Rede Cegonha na Linha do Cuidado às pessoas com HTLV."
        } else if (value == "E2") {
            mensagem = "Falsa. Garantia das boas práticas e segurança na atenção ao parto e nascimento, incluindo local e transporte seguro. – Faz parte das diretrizes da Rede Cegonha na Linha do Cuidado às pessoas com HTLV."
        }

        $("#mensagem2").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem2").empty();
    }
});

// MÓDULO 2 QUESTÃO 3
var resposta3 = "C3"; // Resposta correta
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

        if (value !== "C3") {
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
            $("#C3").addClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "A3") {
            $("#A3").addClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "B3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").addClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "D3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").addClass("resposta-incorreta");
            $("#E3").removeClass("resposta-incorreta");
        } else if (value === "E3") {
            $("#A3").removeClass("resposta-incorreta");
            $("#B3").removeClass("resposta-incorreta");
            $("#C3").removeClass("resposta-correta");
            $("#D3").removeClass("resposta-incorreta");
            $("#E3").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta3 == value) {
            mensagem = "Correta. Exato! O Programa Brasil Saudável, concentra ações intersetoriais voltadas para a eliminação da transmissão vertical de HTLV e de outras infecções transmitidas verticalmente e determinadas socialmente, como a hepatite B, HIV, sífilis, e doença de Chagas, por meio de políticas públicas."
        } else if (value == "A3") {
            mensagem = "Falsa. O Brasil almeja alcançar a eliminação da transmissão vertical de HIV, sífilis, Hepatite B, doença de Chagas e HTLV até 2030."
        } else if (value == "B3") {
            mensagem = "Falsa. o Ministério da Saúde concede certificados de eliminação e selos de boas práticas rumo à eliminação a estados e municípios acima de 100 mil habitantes."
        } else if (value == "D3") {
            mensagem = "Falsa. O Programa Brasil Saudável é voltado para a eliminação e redução de doenças e infecções, não para a erradicação."
        } else if (value == "E3") {
            mensagem = "Falsa. O Dia Internacional do HTLV em 10 de novembro e o Dia Nacional do HTLV em 23 de março."
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
        $("#feedback4 ").removeClass("escondeFeedback")
        resps4.each(function () {
            // concatena os values
            value += $(this).val();
        });

        if (value !== "C4") {
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
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").removeClass("resposta-correta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "B4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").addClass("resposta-incorreta");
            $("#C4").removeClass("resposta-correta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "C4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").addClass("resposta-correta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "D4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").removeClass("resposta-correta");
            $("#D4").addClass("resposta-incorreta");
            $("#E4").removeClass("resposta-incorreta");
        } else if (value === "E4") {
            $("#A4").removeClass("resposta-incorreta");
            $("#B4").removeClass("resposta-incorreta");
            $("#C4").removeClass("resposta-correta");
            $("#D4").removeClass("resposta-incorreta");
            $("#E4").addClass("resposta-incorreta");
        }

        var mensagem = "";

        if (resposta4 == value) {
            mensagem = "Correta. Exato! A função dos Centros de Testagem e Aconselhamento (CTAs) na linha de cuidado para a prevenção da transmissão vertical do HTLV é realizar aconselhamento, testes sorológicos e encaminhamentos para outros níveis de atenção."
        } else if (value == "A4") {
            mensagem = "Falsa. Os Centros de Testagem e Aconselhamento (CTAs) são os que realizam principalmente os testes sorológicos para o HTLV. Mas a função dos Centros de Testagem e Aconselhamento (CTAs) na linha de cuidado para a prevenção da transmissão vertical do HTLV é realizar aconselhamento, testes sorológicos e encaminhamentos para outros níveis de atenção."
        } else if (value == "B4") {
            mensagem = "Falsa. O tratamento e o acompanhamento longitudinal de pessoas vivendo com HTLV e crianças expostas são responsabilidades compartilhadas, principalmente por Serviços de Atendimento Especializado (SAEs), Atenção Terciária e Atenção Primária à Saúde (APS)."
        } else if (value == "D4") {
            mensagem = "Falsa. O planejamento estratégico de prevenção da transmissão vertical do HTLV envolve múltiplos atores e não é atribuído a um único indivíduo ou órgão. A responsabilidade é compartilhada entre diferentes níveis de atenção à saúde e instâncias de governança."
        } else if (value == "E4") {
            mensagem = "Falsa. A função dos Centros de Testagem e Aconselhamento (CTAs) na linha de cuidado para a prevenção da transmissão vertical do HTLV é realizar aconselhamento, testes sorológicos e encaminhamentos para outros níveis de atenção."
        }

        $("#mensagem4").html(mensagem);
    } else {
        // esvazia a div de mensagem
        $("#mensagem4").empty();
    }

});

