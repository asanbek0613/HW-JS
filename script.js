const logToConsole = function (x, y) {
  for (let i = x; i <= y; i++) {
    console.log(i);
  }
};
logToConsole(1, 10);
//////
const showEvenNumbers = function (x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
showEvenNumbers(1, 20);
//////
const CalculateSum = function (x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
const result = CalculateSum(3, 200);
console.log("Сумма четных чисел от 3 до 200:", result);
//////
const findChar = function (word, char) {
  return word.includes(char);
};
console.log(findChar("Билл Гейтс", "e"));
//