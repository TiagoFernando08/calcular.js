const { finalizarPedido } = require('./atividade');

describe('finalizarPedido', () => {
  test('deve manter o valor sem desconto para pedido menor que R$ 200,00', () => {
    const produtos = [
      { nome: 'Camiseta', preco: 80, quantidade: 1 },
      { nome: 'Caneca', preco: 50, quantidade: 1 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(130);
    expect(pedido.totalComDesconto).toBe(130);
  });

  test('pedido exatamente igual a R$ 200,00', () => {
    const produtos = [
      { nome: 'Livro', preco: 100, quantidade: 2 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(200);
    expect(pedido.totalComDesconto).toBe(180);
  });

  test('pedido maior que R$ 200,00', () => {
    const produtos = [
      { nome: 'Notebook', preco: 250, quantidade: 1 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(250);
    expect(pedido.totalComDesconto).toBe(225);
  });

  test('deve calcular corretamente o valor total de vários produtos', () => {
    const produtos = [
      { nome: 'Teclado', preco: 120, quantidade: 1 },
      { nome: 'Mouse', preco: 40, quantidade: 2 },
      { nome: 'Headset', preco: 35, quantidade: 2 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(270);
    expect(pedido.totalComDesconto).toBeCloseTo(243);
  });

  test('deve calcular corretamente o pedido com mais de um produto', () => {
    const produtos = [
      { nome: 'Agenda', preco: 20, quantidade: 2 },
      { nome: 'Caneta', preco: 10, quantidade: 3 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(70);
    expect(pedido.totalComDesconto).toBe(70);
  });

  test('desafio extra: deve calcular corretamente um pedido com 3 produtos diferentes e quantidades variadas', () => {
    const produtos = [
      { nome: 'Caderno', preco: 80, quantidade: 2 },
      { nome: 'Borracha', preco: 25, quantidade: 2 },
      { nome: 'Lápis', preco: 15, quantidade: 3 }
    ];

    const pedido = finalizarPedido(produtos);

    expect(pedido.total).toBe(255);
    expect(pedido.totalComDesconto).toBeCloseTo(229.5);
  });
});
