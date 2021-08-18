const danishPrice = 50;
const butterBreadPrice = 25;
const toastBiscuitPrice = 10;
const myBudget = 7;
const packedWell = false;

if (danishPrice < myBudget) {
  if (packedWell == true) {
    console.log("danish khabo");
  } else {
    console.log(
      "danish khamu na! karon ami khawar age machi kheye felse ordek"
    );
  }
}

if (danishPrice < myBudget) {
  console.log("Danish kyeye danish jabo");
} else if (butterBreadPrice < myBudget) {
  console.log("Butter bon diye cha khamu");
} else if (toastBiscuitPrice < myBudget) {
  console.log("toast biscuit khamu");
} else {
  console.log("Batasha diye cha khumu");
}
