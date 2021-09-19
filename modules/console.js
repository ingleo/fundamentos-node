let table = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
console.table(table);


console.group('numbers')
console.log('Numberone');
console.log('NumberTwo');
console.log('NumberThree');
console.groupEnd('numbers')


function method1() {
  console.group("method1");
  method2();
  console.groupEnd("method1");
}

function method2() {
  console.group("method2");
  console.groupEnd("method2");
}

method1();

console.count('times');
console.count('times');
console.count('times');