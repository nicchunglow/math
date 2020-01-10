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
multi-args addition =

- Multi-arg Sum
function sum(...numbers){
  return numbers.reduce((a, b) => a + b, 0);
}

- Multi-arg Minus
function minus(firstNum, ...numbers){
    return numbers.reduce((a, b) => a -b ,firstNum);
  }
```
## API
`math.add(number, number)`

## Publish or update package on npm
Edit package
Commit changes
Bump up version with npm version <major|minor|patch>
Publish on npm with npm publish --access public