"use strict";
// Dado o seguinte diagrama:
// Identifique os atributos e comportamentos que são comuns entre os
// 3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
// comportamento diferente para cada animal.
class Animal {
    constructor(patas, som, rabo) {
        this.patas = patas;
        this.som = som;
        this.rabo = rabo;
    }
    emitirSom() {
        console.log(`O som deste animal é ${this.som}`);
    }
    correr() {
        console.log("O animal está correndo.");
    }
    deitar() {
        console.log("O animal está deitado");
    }
}
class Cachorro extends Animal {
    brincar() {
        console.log("o cão está brincando");
    }
}
class Gato extends Animal {
    ronronar() {
        console.log("o gato está ronronando");
    }
}
class Cavalo extends Animal {
    galope() {
        console.log("O cavalo está galopando");
    }
}
console.log("<========> Atividades <========> ");
console.log("<========> Cachorro <========> ");
const dog = new Cachorro(4, "late", true);
dog.emitirSom();
dog.brincar();
dog.correr();
console.log("<========> Gato <========> ");
const cat = new Gato(4, "mia", true);
cat.emitirSom();
cat.deitar();
cat.ronronar();
console.log("<========> Cavalo (<========> ");
const horse = new Cavalo(4, "relincha", true);
horse.emitirSom();
horse.correr();
horse.galope();
console.log("<========> Fim das tividades <========> ");
