const bookPages = ["hablu", "bolod", "choddoghusti", "gymnesiam", "battery"];

const batteryIndex = bookPages.indexOf("battery");

console.log(batteryIndex);

const numbers = [2, 25, 65, 25, 58, 96];
const index = numbers.indexOf(58);
const wrong = numbers.indexOf(159); // this is wrong

console.log(index); // 4
console.log(wrong); // -1

const books = ["hablu", "bolod", "choddoghusti", "gymnesiam", "battery"];

const bookIndex = books[3];
const another = books[45]; // this is wrong

console.log(bookIndex); // gymnesiam
console.log(another); // undefined

const marks = [2, 25, 65, 25, 58, 96];

marks[2] = 36;
console.log(marks); // [ 2, 25, 36, 25, 58, 96,]
marks[80] = 20;
console.log(marks); // [ 2, 25, 36, 25, 58, 96, <74 empty items>, 20 ]
