// abstract class Animal {
//   protected som: string;
//   protected olhos: number;
//   protected cauda: boolean;
//   protected peso: number;
//   protected capacidadeBucho: number;
//   protected nivelBucho: number;

//   constructor(som: string, olhos: number, cauda: boolean, peso: number) {
//     (this.som = som), (this.olhos = olhos), (this.cauda = cauda);
//     this.peso = peso;
//     this.capacidadeBucho = 100;
//     this.nivelBucho = 20;
//   }

//   public emitirSom() {
//     console.log(this.som);
//   }

//   public comer(quantidadeDeComida: number) {
//     const quantoEngordou = quantidadeDeComida / 5;

//     if (this.nivelBucho + quantidadeDeComida / 2 >= 100)
//       return console.log(`Este animal está cheio!`);

//     this.nivelBucho += quantidadeDeComida / 2;
//     this.peso += quantoEngordou;
//     console.log(
//       `Comeu ${quantidadeDeComida} kgs de comida. Engordou ${quantoEngordou} kgs. Seu bucho ficou em ${this.nivelBucho}% da capacidade`
//     );
//   }

//   public mover(distancia: number) {
//     const quantoEmagreceu = distancia / 100;
//     this.peso -= quantoEmagreceu;
//     console.log(
//       `Moveu por ${distancia} kms. Emagreceu ${quantoEmagreceu} kgs e ficou com ${this.peso} kgs`
//     );
//   }

//   public evacuar() {
//     this.nivelBucho = 0;
//     console.log(`O nível do bucho do animal agora é ${this.nivelBucho}`);
//   }

//   public inspecionar() {
//     console.log({
//       som: this.som,
//       olhos: this.olhos,
//       cauda: this.cauda,
//       peso: this.peso,
//       capacidadeBucho: this.capacidadeBucho,
//       nivelBucho: this.nivelBucho,
//     });
//   }
// }
// class Cachorro extends Animal {
//   protected corDoPelo: "claro" | "escuro" | "medio";

//   constructor(
//     som: string,
//     olhos: number,
//     cauda: boolean,
//     peso: number,
//     corDoPelo: "claro" | "escuro" | "medio"
//   ) {
//     super(som, olhos, cauda, peso);
//     this.corDoPelo = corDoPelo;
//   }

//   public mover(distancia: number) {
//     const quantoEmagreceu = distancia / 200;
//     this.peso -= quantoEmagreceu;
//     console.log(
//       `Correu por ${distancia} kms. Emagreceu ${quantoEmagreceu} kgs e ficou com ${this.peso} kgs`
//     );
//   }

//   public inspecionar() {
//     console.log(this.corDoPelo);
//   }
// }

// const BreadPitt = new Cachorro("Au Au!", 2, true, 6, "escuro");

// BreadPitt.inspecionar();
// BreadPitt.comer(50);
// BreadPitt.inspecionar();
// BreadPitt.comer(50);
// BreadPitt.inspecionar();
// BreadPitt.evacuar();
// BreadPitt.comer(50);
