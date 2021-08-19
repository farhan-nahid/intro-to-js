function bringSingara(taka) {
  console.log("singara er jonno dise ", taka);
  console.log("Mama singara den");
  const singaraPrice = 10;
  const singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

const money = 90;
const singara = bringSingara(money);
console.log("Ai nen singara ", singara);
