// add Number

function addTwoNumbers(number1, number2) {
  const total = number1 + number2;
  return total;
}

const firstNumber = 35;
const secondNumber = 47;
const result = addTwoNumbers(secondNumber, firstNumber);
console.log("result value: ", result);

// multiply Numbers

function multiplyTwoNumbers(num1, num2) {
  const result = num1 * num2;
  return result;
}

const total = multiplyTwoNumbers(5, 100);
console.log("total after multiplication", total);

// biyog (Subtraction) koro duita sonkha

function subtractionTwoNumber(num1, num2) {
  if (num1 <= num2) {
    return "Your first number must be bigger then last number";
  } else {
    const result = num1 - num2;
    return result;
  }
}

console.log("Result after biyog: ", subtractionTwoNumber(100, 5));

// vagfol ber koro

function divisionTwoNumber(num1, num2) {
  const result = num1 / num2;
  return result;
}

console.log("Result after vag: ", divisionTwoNumber(100, 5));
