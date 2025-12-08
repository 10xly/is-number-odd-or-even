const isNumberOddOrEven = require('./index')

const assert = require('assert-fn')

function runTest (condition, message) {
    try {
        assert(condition, `❌ FAILED: ${message}`)
        console.log(`✅ PASSED: ${message}`)
    } catch (error) {
        console.error(error.message)
    }
}

console.log("--- Starting is-number-odd-or-even Tests ---")

const test1 = isNumberOddOrEven(1)
runTest(test1 === true, "Odd number 1 returns true")

const test2 = isNumberOddOrEven(2)
runTest(test2 === true, "Even number 2 returns true")

const test3 = isNumberOddOrEven(101, true)
runTest(test3 === true, "Large odd number 101 returns true")

const test5 = isNumberOddOrEven(5.3)
runTest(test5 === false, "Decimal number 5.3 returns false")

const test6 = isNumberOddOrEven(Infinity)
runTest(test6 === false, "Positive Infinity returns false")

const test7 = isNumberOddOrEven(-Infinity)
runTest(test7 === false, "Negative Infinity returns false")

const test8 = isNumberOddOrEven(NaN)
runTest(test8 === false, "NaN returns false")

try {
    isNumberOddOrEven("hello")
    runTest(false, "String 'hello' should throw a TypeError")
} catch (e) {
    runTest(e.name === 'TypeError', "String 'hello' throws a TypeError")
}

try {
    isNumberOddOrEven({})
    runTest(false, "Object {} should throw a TypeError")
} catch (e) {
    runTest(e.name === 'TypeError', "Object {} throws a TypeError")
}

try {
    isNumberOddOrEven("10")
    runTest(false, "String number '10' should throw a TypeError")
} catch (e) {
    runTest(e.name === 'TypeError', "String number '10' throws a TypeError")
}

console.log("--- Tests Complete ---")