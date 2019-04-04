const objeto = {
  chave: "valor1",
  chave2: "valor2"
};
console.log(objeto);

const str = "Anderson Bellini";

const soma = function(a, b) {
  return a + b;
};
console.log(soma(1, 2));

const calculadora = function(op, a, b) {
  return op(a, b);
};

console.log(calculadora(soma, 1, 2));

const vetor = [1, 2, 3, 4, 5];
const dobrado = vetor.map(function(item) {
  //return item;
  return { original: item, dobrado: item + 2 };
});

console.log(vetor, dobrado);

const pares = vetor.filter(function(item) {
  return item % 2 === 0;
});
console.log("Pares:", pares);

//Arrow Function
const dobrarValor = item => item * 2;

const somentePares = item => item % 2 === 0;

// const paresDobrado = vetor
//   .filter(function(item) {
//     return item % 2 === 0;
//   })
//   .map(
//     // function(item) {
//     //     return item * 2;
//     //   }
//     dobrarValor
//   );

const paresDobrado = vetor.filter(somentePares).map(dobrarValor);

console.log("Pares Dobrado:", paresDobrado);

//-------------------------------------------------------------
const somar = (acumulado, atual) => acumulado + atual;
const somatorio = paresDobrado.reduce(somar, 10); //com valor inicial
console.log("Somar com reduce: ", somatorio);
