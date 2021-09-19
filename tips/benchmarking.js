let suma = 0;
let suma2 = 0;

console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

console.time("bucle2");
for (let j = 0; j < 1000000; j++) {
  suma2 += 1;
}
console.timeEnd("bucle2");

console.time('bucle3async');
asincrona().then(() => {
    console.timeEnd('bucle3async');
});

function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    });
  });
}
