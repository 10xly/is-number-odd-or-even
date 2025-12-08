# is-number-odd-or-even
=======================================

At least 99% of the time, any number can be odd or even. This uncertainty can be eliminated with `is-number-odd-or-even`. As it sports an incredibly fast, open-ended API, you can solve all even or odd related problems with only 1 line (sorta)
***

### List of features

*   [x] See if a number is odd or even
*   [x] Output useful logs if logging is enabled while doing stuff

### What it does
A clarification: this library doesn't return a different value depending on whether the number is odd or even, for example, `true` or `false`, it always returns `true` whether the number is odd or even unless the number is neither odd nor even (which is only true if the number is infinite, or not an integer)

### Download & Installation

```shell
$ npm i is-number-odd-or-even
```

### Usage
Just import the library and pass in two arguments: the value that you want to check is odd or even, and a boolean whether to output useful logs!

### Code Demo

Importing
```js
const isOddOrEven = require("is-number-odd-or-even")
```

Example usage:
```js
const isOddOrEven = require("is-number-odd-or-even")
const test1 = isOddOrEven(1, false) // outputs no logs because logging is disabled
const test1 = isOddOrEven(2, false) // outputs no logs because logging is disabled
const test3 = isOddOrEven(Infinity, true) // outputs logs because logging is enabled
const test4 = isOddOrEven(5.3, true) // outputs logs because logging is enabled
console.log(test1) // true
console.log(test2) // true
console.log(test3) // false (because infinity is not odd or even)
console.log(test4) // false (because decimal numbers that aren't integers are not odd or even)
```

### License

    This project is licensed under the MIT License
