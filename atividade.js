function calcularTotalPedido(produtos) {
  let total = 0;

  for (const produto of produtos) {
    total += produto.preco * produto.quantidade;
  }

  return total;
}

function aplicarDesconto(total) {
  if (total >= 200) {
    return total * 0.9;
  }

  return total;
}

function finalizarPedido(produtos) {
  const total = calcularTotalPedido(produtos);
  const totalComDesconto = aplicarDesconto(total);

  return {
    total,
    totalComDesconto
  };
}

module.exports = { finalizarPedido };