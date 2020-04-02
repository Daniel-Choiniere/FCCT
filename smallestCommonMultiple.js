// Find the smallest common multiple of the provided parameters that can be evenly divided
// by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3
// that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// -create an array from all the numbers between the min and max number of the given array
// -find the greatest common factor of all the numbers and save it to a new array
//      -divide the numbers that can be divided by the factor, numbers that cant be divided stay
//          -check for a greatest common factor again
//          -once no more factor/division is possible combine the original array and the factor array
//      -loop through the combined array and multiply all the numbers together,
//            this will give us our smallest common multiple
//        -return this number
//

function smallestCommons(arr) {
  console.log(arr);
  let fullArr = [];
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  for (let i = min; i <= max; i++) {
    fullArr.push(i);
  }
  let gcf = findGcf(max, fullArr);
}

function findGcf(max, fullArr) {
  let factors = [];
  for (let j = 0; j > fullArr.length; j++) {
    let checkFactor = fullArr[j] % max;
    console.log(checkFactor);
    while (Number.isInteger(checkFactor == true)) {
      max--;
      factors.push(max);
    }
  }
  // console.log(factors);
}

// find the GCD
function findGcd(max, min) {
  for (let i = 0; i < arr.length; i++) {
    if (min == 0) {
      let gcd = max;
      return gcd;
    } else {
      let mod = max % min;
      return findGcd(min, mod);
    }
  }
}

console.log(smallestCommons([21, 6]));
// should return 42.
smallestCommons([3, 1]);
// // // should return 6.
// smallestCommons([5, 1]);
// // // // should return 60.
// smallestCommons([2, 10]);
// // // // should return 2520.
// smallestCommons([1, 13]);
// // // // should return 360360.
// smallestCommons([23, 18]);
// // // // should return 6056820.

// var min = Math.min(...arr);
// var max = Math.max(...arr);

//   let gcd = findGcd(arr);
//   // console.log(gcd);
//   lcm = findLcm(max, min, gcd);
//   console.log(lcm);
// }

// // find the GCD
// function findGcd(max, min) {
//   for (let i = 0; i < arr.length; i++) {
//     if (min == 0) {
//       let gcd = max;
//       return gcd;
//     } else {
//       let mod = max % min;
//       return findGcd(min, mod);
//     }
//   }
// }

// // Find the LCM
// function findLcm() {
//   // console.log(min);
//   // console.log(max);
//   // console.log(gcd);
//   lcm = (min * max) / gcd;
//   return lcm;
// }
