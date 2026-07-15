class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    mostrarDetalhes() {
        console.log(`${this.nome} | R$ ${this.preco}`);
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        
        this.garantia = garantia;
    }
}

const produto = new Produto("Celular", 2000);
produto.mostrarDetalhes();

const eletronico = new Eletronico("Notebook", 3000, true);
console.log(eletronico);