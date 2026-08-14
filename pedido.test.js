const {criarPedido} = require('./pedido');

test('criarPedido deve retornar um objeto com produto, preco e quantidade', () => {
    const pedido = criarPedido('manga', 4, 2);

    expect(pedido).toEqual({
        produto: 'manga',
        "preco": 8,
        quantidade: 2
    });



})