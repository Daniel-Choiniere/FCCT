// Create a function that sums two arguments together. If only one argument is
// provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should
// return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
  if (typeof arguments[0] != "number") {
    return undefined;
  }
  if (!arguments[1]) {
    let theArgument = arguments[0];
    return function(n) {
      if (typeof n != "number") {
        return undefined;
      }
      return theArgument + n;
    };
  } else if (typeof arguments[1] != "number") {
    return undefined;
  }
  let sumArgs = arguments[0] + arguments[1];
  return sumArgs;
}

// TIME: 55 min

//  Had issue with understanding how and where to return a function when needed

// TESTS
console.log(addTogether(2, 3));
// should return 5.
console.log(addTogether(2)(3));
// // should return 5.
console.log(addTogether("http://bit.ly/IqT6zt"));
// // should return undefined.
console.log(addTogether(2, "3"));
// // should return undefined.
console.log(addTogether(2)([3]));
// // should return undefined.
