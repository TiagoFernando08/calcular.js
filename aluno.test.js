const {avaliarAluno} = require('./aluno');

test('avaliar o aluno com media maior ou igual a 6', () => {
    const aluno = avaliarAluno('João', 7, 8)

    expect(aluno).toEqual({
        nome: 'João',
        media: 7.5,
        situacao: 'Aprovado'
    });
});