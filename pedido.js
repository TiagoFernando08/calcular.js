const { calcularTotal } = require('./calcular');

function criarPedido(produto, preco, quantidade) {
    const precoTotal = calcularTotal(preco, quantidade);

    return {
        produto,
        "preco": precoTotal,
        quantidade
    };
}

module.exports = { criarPedido };