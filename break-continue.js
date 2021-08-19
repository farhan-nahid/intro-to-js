let i = 0;
while (i < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

for (let i = 0; i <= 20; i++) {
  console.log(i);
  if (i > 8) {
    break;
  }
}

const numbers = [54, 35, 21, 98, 23, 101, 45, 67];
for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  console.log(number);
  if (number > 90) {
    break;
  }
}

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  if (number > 90) {
    continue;
  }
  console.log(number);
}
