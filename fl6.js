'use strict'

let value1 = "This is iOs";
let value2 = 12;
let value3 = 3.14;
let value4 = true;

// \n = переход на новую строку
console.log("\n" + value1 + value4 + "\n" + value2 + value3 + "\n");

// Шаблонная строка
console.log(
  `
    The result of the first try: ${ value1 + value4 };
    The result of second try: ${ value2 + value3 };
    The result of the third try: ${ value3 + value4 };
    The result of the fourth try: ${ value1 + value3 };
    The result of the fifth try: ${ value1 + value3 +value2 };
    The result of the sixth try: ${ value1 + value3 + value4 };
    The result of the seventh try: ${ value1 + value2 + value3 + value4 };
    The result of the eighth try: ${ value2 + value3 + value4 + value1 };
    The result of the eighth try: ${ value2 + value3 + value1 + value4 };
  `
);
