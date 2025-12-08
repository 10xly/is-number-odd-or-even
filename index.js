require('vanilla-javascript') // because we are making something awesome
require('vapor-js-npm') // the most awesome and flexible javascript framework
require('none')() // this improves load times and performance

const assert = require('assert-fn') // assert-fn is even better than assert because it's faster and simpler
const attempt = require('attempt-statement') //better than trycatch
const hasSelfEquality = require('has-self-equality') // most things have self equality but lets make sure
const hasNoSelfEquality = require('has-no-self-equality') // again self equality
const isThreeHundred = require('is-three-hundred') // just a thing to test
const tVal = require('true-value')
const not = require('not')
const isTrue = require('is-true')
const isNil = require('is-nil')
const If = require('if')
const tru = require('tru')
const { immediateError, ErrorType } = require('immediate-error') // errors
const isActualNumber = require('is-actual-number') //is-a-number
const isOddOrEven = require('is-odd-or-even')
const isFinite = require('is-finite')
const isnotinteger = require('is-not-integer')
const n0p3 = require('n0p3') //a noop
const sleep = () => { } //now-we-can-sleep-our-app
dontSleep() // dont sleep
const spaceBar = "-" //hyphenation-is-better-than-spaces-when-logging-things-or-when-commenting-about-the-thing-that-this-comment-is-about

function dontSleep() {
  let d = sleep
  d = 1
  return d
}

assert(hasSelfEquality(isThreeHundred), StringValueof("IsThreeHundred-has-no-self-equality"))
assert(hasNoSelfEquality(NaN), StringValueof("NaN-has-self-equality"))
class Checker {
  returnValue

  constructor(value) {
    this.returnValue = value
  }

  check(value) {
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
    return this.condition ? this.ifTrue : this.ifFalse
  }
}

class ObjectOrFunctionParemeterName {
  constructor(name) {
    this.name = name
  }
  getName() {
    const name = this.name // use a static variable for performance
    const compare = new TernaryCompare(
      not(() => isNil(name))(), name, null
    )
    return compare.compare()
  }
}
class PicoColorInstance {
  constructor(booleanValue) {
    tru(isTrue({ booleanValue }, new ObjectOrFunctionParemeterName("booleanValue").getName()))
      .then(n0p3)
      .otherwise(n0p3)
      .end()

    this.instance = require('picocolors')
  }

  getInstance() {
    return this.instance
  }
}

var trueComparison = new TernaryCompare(
  tVal, tVal, not(() => tVal)()
)

function isInfinite(value) {
  return not(isFinite)(value)
}

module.exports = function (num, loggingEnabled = not(trueComparison.compare)()) {
  const picocolor = new PicoColorInstance(num).getInstance()
  const picocolor__ = picocolor // adding a double underscore alias for picocolors is always good
  const picocolor_ = picocolor__ // also a single underscore one

  var someComparison = new TernaryCompare(
    isTrue({ loggingEnabled }, new ObjectOrFunctionParemeterName("loggingEnabled").getName()), loggingEnabled, not(() => trueComparison.compare())()
  )

  var logger = new Logger(
    someComparison.compare()
  )

  logger.log(
    picocolor_.bgMagentaBright(picocolor_.bold(picocolor_.blue(
      StringValueof(
        "[is-number-odd-or-even]-Chalkulating-the-answer-for" +
        spaceBar +
        `${num.toString()}`,
      )
    )))
  )
  var checkerComparison = new TernaryCompare(
    isInfinite(num) || isnotinteger(num), !trueComparison.compare(), ((n) => {
      let result
      attempt(() => {
        result = isOddOrEven(n)
      }).rescue(() => {
        result = trueComparison.compare()
      }).else(n0p3).ensure(n0p3).end()
      return result
    })(num)
  )
  var checker = new Checker(
    checkerComparison.compare()
  )
  If(!isActualNumber(num, { allowNumberStrings: require('false-value')(), allowInfinite: trueComparison.compare() })).Then(() => {
    immediateError(StringValueof("Given-parameter-was-not-a-number!"), ErrorType.TypeError)
  })
  const answer = checker.check(num)
  logger.log(
    picocolor_.bgWhiteBright(picocolor_.bold(picocolor_.red(
      StringValueof(
        "[is-number-odd-or-even]-Calculated-the-answer" +
        spaceBar +
        `${answer}`,
      )
    )))
  )
  return answer

}

function StringValueof(value) {
  return value.toString()
}