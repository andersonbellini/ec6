console.log("Entrada 1");

setTimeout(() => {
  console.log("Entrada 2");
}, 1000);
console.log("Entrada 3");
//---------------------------------------------------------------------
console.log("Olá 1");
let count = 0;
// Executa a cada 25 segundos
let intverval = setInterval(() => {
  console.log("Olá 2 ");
  count++;
  if (count > 5) {
    clearInterval(intverval);
  }
}, 1000);
console.log("Olá 3");
//---------------------------------------------------------------------
console.log("XXX 1");
let count2 = 0;
let intverval2 = setInterval(() => {
  console.log("XXX 2");
  count2++;
  if (count2 > 5) {
    clearInterval(intverval2);
  }
}, 500);
console.log("XXX Final");
