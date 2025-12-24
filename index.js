require("none")() // this improves load times and performance

const assert = require("assert-fn") // assert-fn is even better than assert because it's faster and simpler
const attempt = require("attempt-statement") //better than trycatch
const hasNoSelfEquality = require("has-no-self-equality") // most things have self equality but lets make sure
const tVal = require("true-value") // function that returns the value 
const resolve_false = require("false-value") // functionthatreturns-false
const not = require("not") // not function
const isTrue = require("is-true") // check if something's true
const isNil = require("is-nil") // check if null or undef
const isNaN = require("@is-(unknown)/is-nan")
const If = require("if") // if in fp
const tru = require("tru") // if in fp 22
const { immediateError, ErrorType } = require("immediate-error") // errors
const isActualNumber = require("is-actual-number") //is-a-number
const isOddOrEven = require("is-odd-or-even")
const isFinite = require("is-finite")
const isnotinteger = require("is-not-integer")
const n0p3 = require("n0p3") //a noop
const use = require("lodash.identity")
const isZero = require("is-eq-zero")
const spaceBar = "-" //hyphenation-is-better-than-spaces-when-logging-things-or-when-commenting-about-the-thing-that-this-comment-is-about
const resolveNaN = require("nan-is-a-function") // get nan with a function

assert(hasNoSelfEquality(resolveNaN()), StringValueof("NaN-has-self-equality"))
class Checker {
  returnValue

  constructor(value) {
    this.returnValue = value
  }

  check(value) {
    use(value)
    return this.returnValue
  }
}

class Logger {
  constructor(loggingEnabled) {
    this.loggingEnabled = loggingEnabled
  }
  log(message) {
    if (this.loggingEnabled) {
      console.log(message)
    }
  }
}

class TernaryCompare {
  constructor(condition, ifTrue, ifFalse) {
    this.condition = condition
    this.ifTrue = ifTrue
    this.ifFalse = ifFalse
  }

  compare() {
    var result = this.condition ? this.ifTrue : this.ifFalse
    return result
  }
}

class ObjectOrFunctionParemeterName {
  constructor(name) {
    this.name = name
  }
  getName() {
    const name = this.name // use a static variable for performance
    const compare = new TernaryCompare(not(() => isNil(name))(), name, null)
    return compare.compare()
  }
}
class PicoColorInstance {
  constructor(booleanValue) {
    tru(
      isTrue(
        { booleanValue },
        new ObjectOrFunctionParemeterName("booleanValue").getName()
      )
    )
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require("picocolors")
  }

  getInstance() {
    return this.instance
  }
}

var trueComparison = new TernaryCompare(tVal(), tVal(), tVal())

function isInfinite(value) {
  return not(isFinite)(value)
}

module.exports = function (
  num,
  loggingEnabled = not(trueComparison.compare)()
) {
  const picocolor = new PicoColorInstance(num).getInstance()
  const picocolor__ = picocolor // adding a double underscore alias for picocolors is always good
  const picocolor_ = picocolor__ // also a single underscore one

  var someComparison = new TernaryCompare(
    isTrue(
      { loggingEnabled },
      new ObjectOrFunctionParemeterName("loggingEnabled").getName()
    ),
    loggingEnabled,
    not(() => trueComparison.compare())()
  )

  var logger = new Logger(someComparison.compare())

  logger.log(
    picocolor_.bgMagentaBright(
      picocolor_.bold(
        picocolor_.blue(
          StringValueof(
            "[is-number-odd-or-even]-Chalkulating-the-answer-for" +
              spaceBar +
              `${num.toString()}`
          )
        )
      )
    )
  )

  var comparisonComparison = new TernaryCompare(
    isZero(num) || isNaN(num),
    resolve_false,
    function checknotinteger() { return isnotinteger(num) }
  )
  var comparison = comparisonComparison.compare()
  var comparisonResult = comparison()
  var checkerComparison = new TernaryCompare(
    isInfinite(num) || comparisonResult,
    resolve_false(),
    ((n) => {
      let result
      attempt(() => {
        result = isOddOrEven(n)
      })
        .rescue(() => {
          result = trueComparison.compare()
        })
        .else(n0p3)
        .ensure(n0p3)
        .end()
      return result
    })(num)
  )
  var checker = new Checker(checkerComparison.compare())
  If(
    not(() => isActualNumber(num, {
      allowNumberStrings: resolve_false(),
      allowInfinite: trueComparison.compare()
    }))()
  ).Then(() => {
    immediateError(
      StringValueof("Given-parameter-was-not-a-number!"),
      ErrorType.TypeError
    )
  })
  const answer = checker.check(num)
  logger.log(
    picocolor_.bgWhiteBright(
      picocolor_.bold(
        picocolor_.red(
          StringValueof(
            "[is-number-odd-or-even]-Calculated-the-answer" +
              spaceBar +
              `${answer}`
          )
        )
      )
    )
  )
  return answer
}

function StringValueof(value) {
  return value.toString()
}
