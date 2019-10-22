// Write a function that takes two or more arrays and returns a new array of unique
// values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their
// original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array
// should not be sorted in numerical order.

// Loop through the multidimensional array one number in each array at a time
//   add the current indexed number to a new array
//     on the next loop check if the number is in the array
//         if not add it to the new array
// return the new array

function uniteUnique(arr) {
  var uniqueArr = [];

  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      // console.log(arguments[i][j]);
      if (uniqueArr.indexOf(arguments[i][j]) == -1) {
        uniqueArr.push(arguments[i][j]);
      }
    }
  }
  console.log(uniqueArr);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]);
// // should return [1, 2, 3, 5]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
// // should return [1, 2, 3, 5, 4, 6, 7, 8]

// TIME:
