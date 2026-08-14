const { calcularMedia } = require('./calcular');

function verificarSituacao(media){
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function avaliarAluno(nome, nota1, nota2) {
    const media = calcularMedia(nota1, nota2);
    const situacao = verificarSituacao(media);

    return {
        nome,
        media,
        situacao
    };
}

module.exports = { avaliarAluno,};