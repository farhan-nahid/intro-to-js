const skyColor = "white";

const phones = ["iphone", "shaomi", "samsung", "lg", "htc"];
phones[3] = "walton";

// check oppo not exists in an array
if (phones.indexOf("oppo") == -1) {
  console.log("opps! amir khan oppo is missing");
}

// if lg is available
if (phones.indexOf("lg") != -1) {
  console.log("Lg is available now");
}

// loop
let num = 0;
while (num <= 10) {
  num++;
}

for (let i = 0; i < phones.length; i++) {}

// function
function addThreeNumbers(number1, number2, number3) {
  const total = number1 + number2 + number3;
  return total;
}

addThreeNumbers(87, 41, 56);

// object
const microphone = {
  brand: "blue yeti",
  price: 120,
  color: black,
};
