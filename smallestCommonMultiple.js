// Find the smallest common multiple of the provided parameters that can be evenly divided
// by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// create an array from all the numbers between the min and max number of the given array
// check these numbers using modulo against all numbers up until we get one that
// returns modulo 0 for all the new array numbers
// return that number

function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  //   console.log(min);
  //   console.log(max);
  var allNumbers = [];

  for (var i = min; i <= max; i++) {
    allNumbers.push(i);
  }

  for (var i = 0; i < allNumbers.length; i++) {
    // console.log(allNumbers[i]);
    console.log(i + 1);

    if (allNumbers[i] % (i + 2) == 0) {
      //   return i + 1;
    }
  }
}

smallestCommons([5, 1]);
// // should return 60.
// smallestCommons([2, 10]);
// // should return 2520.
// smallestCommons([1, 13]);
// // should return 360360.
// smallestCommons([23, 18]);
// // should return 6056820.
