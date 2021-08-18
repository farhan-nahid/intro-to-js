const gotJob = false;
const moneySaved = 50000;
const hasFlat = false;
const hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('Cholo biya kore feli!!');
// }
// else {
//     console.log('Tor kopale biya nai!!!')
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
  console.log("Cholo biya kore feli!!");
} else {
  console.log("Tor kopale biya nai!!!");
}
