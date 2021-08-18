// add element in an array in last

const lastBench = ["kalam", "salam", "balam"];
lastBench.push("jalam");
lastBench.push("palam");
lastBench.push("nalam");
console.log(lastBench); // ["kalam", "salam", "balam", "jalam", "palam", "nalam"];

const friendsAge = [11, 13, 17, 12];
friendsAge.push(74);
friendsAge.push(15);
console.log(friendsAge); // [11, 13, 17, 12, 74, 15];

// remove element from an array in last

const names = ["kalam", "salam", "balam", "jalam", "palam", "nalam"];
names.pop();
names.pop();

console.log(names);

const number = [11, 13, 17, 12, 74, 15];
const lastNumber = number.pop(); // we can store last element in a variable
number.pop();

console.log(number); // [ 11, 13, 17, 12 ]
console.log(lastNumber); // 15
