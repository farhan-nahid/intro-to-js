const onionPrice = 40;
const eggPrice = 80;
const eggQuantity = 10;
const mango = 9;
const people = 2;

// mathematical operators

const addition = onionPrice + eggPrice;
const subtract = onionPrice - eggPrice;
const multiplication = eggPrice * eggQuantity;
const division = mango / people;
const modulus = mango % people;

// outputs

console.log(addition);
console.log(subtract);
console.log(multiplication);
console.log(division);
console.log(modulus);

// spacial edition

const number = 0.1;
const number2 = 0.2;

const total = number + number2;
let fixedTotal = total.toFixed(1); // now we are find the number in string
fixedTotal = parseFloat(fixedTotal); // we convert the string to number

console.log(total);
console.log(fixedTotal);
