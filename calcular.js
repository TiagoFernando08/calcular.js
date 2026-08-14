function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

module.exports = { 
    calcularTotal, 
    calcularMedia 
};