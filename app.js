// * OPDRACHT 1
// functie voor het checken van de vooraad
function checkStock() {
  let totalStock = 0;

  inventory.map((element) => {
    let stockElement = element.originalStock - element.sold;
    totalStock = totalStock + stockElement;
  });
  return totalStock;
}
// de span uit de html code halen en de functie voor het checken van de vooraad toevoegen
const totalStock = document.querySelector(".total-tv");
totalStock.textContent = checkStock();

// * OPDRACHT 2
// array met alle tv types
const tvTypes = inventory.map((element) => {
  return element.type;
});

// array met uitverkocht tv's
const soldOut = inventory.filter((element) => {
  if (element.originalStock - element.sold <= 0) {
    return true;
  }
});

// array met alle tv's  die beschikken over Ambilight

const ambilightTv = inventory.filter((element) => {
  if (element.options.ambiLight === true) {
    return true;
  }
});

// veranderd de sortering van prijs. laag naar hoog
inventory.sort((a, b) => {
  return a.price - b.price;
});

// * OPDRACHT 3a

// For of loop die het totaal bedrag weergeeft van wat er verdient kan worden
let totalGoal = 0;
for (const element of inventory) {
  totalGoal += element.price * element.originalStock;
}
// totalGoal wordt hierbij weergegeven in het HTML bestand
const totalGoal2 = document.querySelector(".total-goal");
totalGoal2.textContent = totalGoal;

// * OPDRACHT 3b

// For of loop die het totaal bedrag weergeeft van de verkochte tv's
let totalPresentEarning = 0;
for (const element of inventory) {
  totalPresentEarning += element.sold * element.price;
}
// totalGoal wordt hierbij weergegeven in het HTML bestand
const totalEarning = document.querySelector(".total-earnings");
totalEarning.textContent = totalPresentEarning;

// * EXTRA OPDRACHT (had de opdracht verkeerd gelezen en heb een 'nu nog te verdienen' overzicht gemaakt.)
// const arrayPrice = inventory.map((element) => {
//   return element.price;
// });

// const arrayStock = inventory.map((element) => {
//   return element.originalStock - element.sold;
// });

// let totalPrice = 0;
// for (let i = 0; i < arrayPrice.length; i++) {
//   const element = arrayPrice[i];
//   let price = element * arrayStock[i];
//   console.log(price);
//   totalPrice = totalPrice + price;
// }

// * OPDRACHT 4

const tvTypeParagrapgh = document.querySelector(".tv-types");
let tvType1 = document.createElement("div");
tvType1.textContent = ` 1e type ${tvTypes[1]}`;
tvTypeParagrapgh.append(tvType1);

let tvType2 = document.createElement("div");
tvType2.textContent = ` 2e type ${tvTypes[3]}`;
tvTypeParagrapgh.append(tvType2);

// * OPDRACHT 5

// De mainfunctie die alles verzameld en op de HTML pagina invoegt.
function tvGenerator(tvs) {
  for (let i = 0; i < tvs.length; i++) {
    const tv = tvs[i];
    const tvFirstline = `${tv.brand} ${tv.type} - ${tv.name} <br>`;
    const tvSecondline = `${createPrice(tv.price)} <br>`;
    const tvThirdline = `${sizeGenerator(tv.availableSizes)} <br>`;
    const li = document.createElement("li");
    li.innerHTML = tvFirstline + tvSecondline + tvThirdline;
    document.querySelector(".tv-overview").append(li);
  }
}

// Functie die de tv prijs omzet naar een prijs in euro's
function createPrice(price) {
  return `€${price},-`;
}

// Functie die over de tv size array loopt en een string returned waarin inches en cm worden aangegeven
function sizeGenerator(sizesArray) {
  for (const size of sizesArray) {
    const sizeCm = Math.floor(size * 2.54);
    return `${size} inch (${sizeCm} cm)`;
  }
}

// uitvoeren van de main tvGenerator functie
tvGenerator(inventory);
