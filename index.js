const assert = require("assert");

const add = function(a, b) {
return a + b;
};
const math = {
    add: add
};

function sum(...numbers){
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));
module.exports = math;
assert.strictEqual(sum(1, 2, 3, 4), 10);
console.log("all good");
