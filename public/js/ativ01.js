"use strict";
// 1. Crie uma classe abstrata chamada Ingresso que possui um valor
// em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso..
// b. crie uma classe VIP, que herda Ingresso e possui um valor
// adicional. Altere o método imprimeValor para mostrar o valor
// do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um
// valor adicional. Altere o método imprimeValor para mostrar o
// valor do ingresso somado com o adicional.
class Ingresso {
    constructor(valor) {
        this.valor = valor;
    }
    imprimeValor() {
        return this.valor;
    }
}
class IngressoConv extends Ingresso {
}
class IngressoVip extends Ingresso {
    imprimeValor() {
        return this.valor + (this.valor * 20) / 100;
    }
}
class Camarote extends Ingresso {
    imprimeValor() {
        return this.valor + (this.valor * 50) / 100;
    }
}
console.log("<========> Atividades (<========> ");
const camarote = new Camarote(100);
console.log(camarote.imprimeValor());
const vip = new IngressoVip(100);
console.log(vip.imprimeValor());
const ingressoPista = new IngressoConv(100);
console.log(ingressoPista.imprimeValor());
console.log("<========> Fim das tividades (<========> ");
