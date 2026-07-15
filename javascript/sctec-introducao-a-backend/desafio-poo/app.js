class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes() {
        console.log(`${this.nome} | R$ ${this.preco}`);
    }
}

const produto = new Produto("Celular", 2000);
produto.mostrarDetalhes();