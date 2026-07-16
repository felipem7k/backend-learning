const mockProdutos = [
    {
        id: 1,
        nome: "Celular",
        preco: 2000
    },
    {
        id: 2,
        nome: "Camiseta",
        preco: 150
    }
]

function carregarProduto(id) {
    return new Promise(resolve => {
        const product = mockProdutos.find(produto => produto.id === id);

        setTimeout(() => {
            resolve(product ? product : null);
        }, 2000);
    });
}
