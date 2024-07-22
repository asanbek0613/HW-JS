//тапшырма 1)

let num = 10;
if (num === 10) {
  console.log("туура");
} else {
  console.log("туура эмес");
}

//тапшырма 2)

let baatir = 25;
if (baatir > 20 && baatir < 21) {
  console.log("уй биринчи эшикте");
} else if (baatir > 21 && baatir < 48) {
  console.log("уй экинчи эшикте");
} else if (baatir > 49 && baatir < 90) {
  console.log("уй учунчу эшикте");
}
//тапшырма 3)

let b = 10;
if (b > 0 && b < 7) {
  console.log("true");
} else {
  console.log("false");
}

//тапшыриа 4-5

let userName = prompt("Baktiyar baike?");
let userTime = 12;
if (userTime >= 6 && userTime <= 12) {
  console.log("кутман тан," + userName + "рахмат!");
} else if (userTime >= 12 && userTime <= 17) {
  console.log("кутман кун," + userName + "!");
} else {
  console.log("кутман кеч," + userName + "!");
}

//тапшырма 6)

let userAge = 14;
if (userAge < 11 && userAge > 45) {
  console.log("арзандатуу бар");
} else {
  console.log("арзандатуу жок");
}

//тапшырма 7)

let userChoose1 = prompt("Танда таш кайчы кагаз (User-1)");

let userChoose2 = prompt("Танда таш кайчы кагаз (User-2)");

if (userChoose1 === "кагаз" && userChoose2 === "кагаз") {
  console.log("туура эмес!");
} else if (userChoose1 === "кагаз" && userChoose2 === "кайчы") {
  console.log("user-2 winner");
} else if (userChoose1 === "кагаз" && userChoose2 === "таш") {
  console.log("user-1 winner");
} else if (userChoose1 === "кайчы" && userChoose2 === "кагаз") {
  console.log("user-1 winner");
} else if (userChoose1 === "кайчы" && userChoose2 === "кайчы") {
  console.log("туура эмес");
} else if (userChoose1 === "кайчы" && userChoose2 === "таш") {
  console.log("user-2 winner");
} else if (userChoose1 === "таш" && userChoose2 === "кагаз") {
  console.log("user-2 winner");
} else if (userChoose1 === "таш" && userChoose2 === "кайчы") {
  console.log("user-1 winner");
} else if (userChoose1 === "таш" && userChoose2 === "таш") {
  console.log("туура эмес");
} else {
  alert("мээм жетпесе олойунбу!");
}

//тапшырма 9)

let number = 7;
if (number === 7) {
  console.log("seven");
} else {
  console.log("not seven");
}
