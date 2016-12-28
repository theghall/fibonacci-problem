// fibonacci-problem.js
//
// 2016-12-28 GH  Created
//
var i = 0;
var fibonacciArray = [];
var termThreshold = false;
var sumEvenFibonacciTerms = 0;

fibonacciArray.push(1);
fibonacciArray.push(2);

sumEvenFibonacciTerms += 2;

while (!termThreshold) {
  nextTerm = fibonacciArray[i] + fibonacciArray[++i];

  if (nextTerm <= 4000000) {
    fibonacciArray.push(nextTerm);

    if (nextTerm % 2 === 0) {
      sumEvenFibonacciTerms += nextTerm;
    }
  }
  else {
    termThreshold = true;
  }
}

console.log("Fibonacci Sequence :" + fibonacciArray);
console.log("The sum of the even numbers in this Fibonacci Sequence is " + sumEvenFibonacciTerms);
