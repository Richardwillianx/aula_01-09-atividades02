"use strict";
// Crie as seguintes classes:
// a. Crie uma classe chamada Universidade, que terá como
// atributos: nome e local. Além disso, deve possuir um método
// construtor e métodos para encapsulamento dos seus
// atributos.
// b. Uma classe chamada Pessoa, com os atributos: nome e data
// de nascimento (que pode ser String). Assim como na outra
// classe, crie um método construtor e métodos para
// encapsulamento de seus atributos.
class Universidade {
    constructor(nome, local) {
        this.nome = nome;
        this.local = local;
    }
}
class Pessoa {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.dataNascimento = nascimento;
    }
}
