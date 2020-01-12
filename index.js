const assert = require("assert");

//Simple addition function "add"
const add = function(a, b) {
return a + b;
};
const math = {
    add: add
};
//Multi Arg sum function "sum"
function sum(...numbers){
  return numbers.reduce((a, b) => a + b, 0);
}

// multi arg minus "minus"
function minus(firstNum, ...numbers){
  return numbers.reduce((a, b) => a - b, firstNum);
  }

  // multi arg minus "multiply"
function multiply(firstNum, ...numbers) {
  return numbers.reduce((a, b) => a * b, firstNum);
  }

    // multi arg minus "divide"
function divide(firstNum, ...numbers) {
  return numbers.reduce((a, b) => a / b, firstNum);
    }

module.exports = math;
assert.strictEqual(sum(1, 2, 3, 4), 10);
assert.strictEqual(minus(10, 2, 3, 4), 1);
assert.strictEqual(multiply(1, 2, 3, 4), 24);
assert.strictEqual(divide(20, 2, 2), 5);

console.log("all good");
