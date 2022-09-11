"use strict";
// Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional
// no preço. Crie métodos de acesso e impressão deste valor
// adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto
// no preço. Crie métodos de acesso e impressão para este
// desconto.
class Imovel {
    constructor(endereco, preco) {
        this.endereço = endereco;
        this.preco = preco;
    }
}
class Novo extends Imovel {
    constructor(endereco, preco) {
        super(endereco, preco);
        this.adicional = 1.2;
    }
    acesso() {
        return this.adicional;
    }
    imprimeValor() {
        this.preco *= this.adicional;
        console.log(this.preco);
    }
}
class Velho extends Imovel {
    constructor(endereco, preco) {
        super(endereco, preco);
        this.adicional = 0.8;
    }
    acesso() {
        return this.adicional;
    }
    imprimeValor() {
        this.preco *= this.adicional;
        console.log(this.preco);
    }
}
console.log("<========> Atividades (<========> ");
const apNovo = new Novo("Rua Guilherma", 1000);
console.log(apNovo.acesso());
apNovo.imprimeValor();
const apOld = new Velho("Rua Josefina", 1000);
console.log(apOld.acesso());
apOld.imprimeValor();
console.log("<========> Fim das atividades (<========> ");
