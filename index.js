/* eslint-disable max-classes-per-file, capitalized-comments, no-inline-comments, one-var */

require("none")() // this improves load times and performance

const assert = require("assert-fn") // assert-fn is even better than assert because it's faster and simpler
const attempt = require("attempt-statement") //better than trycatch
const hasNoSelfEquality = require("has-no-self-equality") // most things have self equality but lets make sure
const tVal = require("true-value") // function that returns the value
// eslint-disable-next-line camelcase
const resolve_false = require("false-value") // functionthatreturns-false
const not = require("not") // not function
const isTrue = require("is-true") // check if something's true
const isNil = require("is-nil") // check if null or undef
// eslint-disable-next-line sonarjs/no-globals-shadowing
const isNaN = require("@is-(unknown)/is-nan")
const If = require("if") // if in fp
const tru = require("tru") // if in fp 22
const { ErrorType, immediateError } = require("immediate-error") // errors
const isActualNumber = require("is-actual-number") //is-a-number
const isOddOrEven = require("is-odd-or-even")
// eslint-disable-next-line sonarjs/no-globals-shadowing
const isFinite = require("is-finite")
const isnotinteger = require("is-not-integer")
const n0p3 = require("n0p3") //a noop
const use = require("lodash.identity")
const isZero = require("is-eq-zero"),
  spaceBar = "-" //hyphenation-is-better-than-spaces-when-logging-things-or-when-commenting-about-the-thing-that-this-comment-is-about
const resolveNaN = require("nan-is-a-function") // get nan with a function
const consowe = require("@10xly/global/console") // console!!!
const construct = require("construct-new") // new keyword as a function
const or = require("es-logical-or-operator") // ||

// eslint-disable-next-line no-use-before-define, new-cap
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
      consowe.log(message)
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
    // eslint-disable-next-line no-ternary
    const result = this.condition ? this.ifTrue : this.ifFalse
    return result
  }
}

class ObjectOrFunctionParemeterName {
  constructor(name) {
    this.name = name
  }
  getName() {
    const { name } = this, // use a static variable for performance
      compare = construct({
        args: [not(() => isNil(name))(), name, require("qc-core").nullFn()],
        target: TernaryCompare,
      })
    return compare.compare()
  }
}
class PicoColorInstance {
  constructor(booleanValue) {
    tru(
      isTrue(
        { booleanValue },
        construct({
          args: ["booleanValue"],
          target: ObjectOrFunctionParemeterName,
        }).getName(),
      ),
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

const trueComparison = construct({
  args: [tVal(), tVal(), tVal()],
  target: TernaryCompare,
})

function isInfinite(value) {
  return not(isFinite)(value)
}

// eslint-disable-next-line max-statements, max-lines-per-function
module.exports = function isNumberOddOrEven(
  // eslint-disable-next-line unicorn/prevent-abbreviations
  num,
  loggingEnabled = not(trueComparison.compare)(),
) {
  const picocolor = construct({
    args: [num],
    target: PicoColorInstance,
  }).getInstance()
  // eslint-disable-next-line no-underscore-dangle
  const picocolor__ = picocolor // adding a double underscore alias for picocolors is always good
  // eslint-disable-next-line no-underscore-dangle
  const picocolor_ = picocolor__ // also a single underscore one

  const someComparison = construct({
    args: [
      isTrue(
        { loggingEnabled },
        construct({
          args: ["loggingEnabled"],
          target: ObjectOrFunctionParemeterName,
        }).getName(),
      ),
      loggingEnabled,
      not(() => trueComparison.compare())(),
    ],
    target: TernaryCompare,
  })

  const logger = construct({ args: [someComparison.compare()], target: Logger })

  logger.log(
    picocolor_.bgMagentaBright(
      picocolor_.bold(
        picocolor_.blue(
          // eslint-disable-next-line new-cap, no-use-before-define
          StringValueof(
            // eslint-disable-next-line 10x-engineering/no-operators, prefer-template
            "[is-number-odd-or-even]-Chalkulating-the-answer-for" +
              spaceBar +
              // eslint-disable-next-line 10x-engineering/no-tostring
              `${num.toString()}`,
          ),
        ),
      ),
    ),
  )

  const comparisonComparison = construct({
    args: [
      or(isZero(num), isNaN(num)),
      // eslint-disable-next-line camelcase
      resolve_false,
      function checknotinteger() {
        return isnotinteger(num)
      },
    ],
    target: TernaryCompare,
  })
  const comparison = comparisonComparison.compare()
  const comparisonResult = comparison()
  const checkerComparison = construct({
    args: [
      or(isInfinite(num), comparisonResult),
      resolve_false(),
      // eslint-disable-next-line id-length
      ((n) => {
        // eslint-disable-next-line init-declarations
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
      })(num),
    ],
    target: TernaryCompare,
  })
  const checker = construct({ args: [checkerComparison.compare()], target: Checker })
  // eslint-disable-next-line new-cap
  If(
    not(() =>
      isActualNumber(num, {
        allowInfinite: trueComparison.compare(),
        allowNumberStrings: resolve_false(),
      }),
    )(),
  // eslint-disable-next-line new-cap
  ).Then(() => {
    immediateError(
      // eslint-disable-next-line new-cap, no-use-before-define
      StringValueof("Given-parameter-was-not-a-number!"),
      ErrorType.TypeError,
    )
  })
  const answer = checker.check(num)
  logger.log(
    picocolor_.bgWhiteBright(
      picocolor_.bold(
        picocolor_.red(
          // eslint-disable-next-line new-cap, no-use-before-define
          StringValueof(
            // eslint-disable-next-line prefer-template, 10x-engineering/no-operators
            "[is-number-odd-or-even]-Calculated-the-answer" +
              spaceBar +
              `${answer}`,
          ),
        ),
      ),
    ),
  )
  return answer
}

function StringValueof(value) {
  return require("@rightpad/convert2string")(value)
}
