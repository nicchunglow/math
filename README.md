# Math

A simple math library

## Install

```
npm install @nicchunglow/math
```
## Usage 
``` 
To use : 
const math = require('@nicchunglow/math')

- Addition (2 args only)
const result = math.add(1,1)

- Multi-arg Sum
function sum(...numbers){
  return numbers.reduce((a, b) => a + b, 0);
}

- Multi-arg Minus
function minus(firstNum, ...numbers){
    return numbers.reduce((a, b) => a -b ,firstNum);
  }

- Multi-arg Multiply
function multiply(firstNum, ...numbers) {
  return numbers.reduce((a, b) => a * b, firstNum);
  }

- Multi-arg Divide
function divide(firstNum, ...numbers) {
  return numbers.reduce((a, b) => a / b, firstNum);
    }

```
## API
`math.add(number, number)`
`sum((first integer)...numbers)`
`minus((first integer)...numbers)`
`multiply((first integer)...numbers)`
`divide((first integer)...numbers)`

## Publish or update package on npm
Edit package
Commit changes
Bump up version with npm version <major|minor|patch>
Publish on npm with npm publish --access public