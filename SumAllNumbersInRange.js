// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

function sumAll(arr) {
  var total = 0;

  if (arr[0] < arr[1]) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }

  for (i = arr[1]; i <= arr[0]; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([4, 1]));
console.log(sumAll([1, 4]));

// TIME = 17m
