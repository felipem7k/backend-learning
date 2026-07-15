class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes() {
        console.log(`${this.nome} | R$ ${this.preco}`)
    }
}