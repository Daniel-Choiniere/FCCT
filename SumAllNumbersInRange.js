// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  var sorted = arr.sort();

  var total = 0;
  for (i = sorted[1]; i <= sorted[0]; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll([5, 10]));

// TIME = 15m
