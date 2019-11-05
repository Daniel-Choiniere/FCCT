// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
// TIME: 17mins

function sumFibs(num) {
  let fibArray = [1, 1];
  let fibNum = 0;
  while (fibNum <= num) {
    fibNum = fibArray[0] + fibArray[1];
    fibArray.unshift(fibNum);
  }
  fibArray.shift();
  console.log(fibArray);
  let total = 0;
  for (let i = 0; i < fibArray.length; i++) {
    if (fibArray[i] % 2 != 0) {
      total += fibArray[i];
    }
  }
  console.log(total);
}

// sumFibs(1);
// should return a number.
sumFibs(1000);
// should return 1785.
// sumFibs(4000000);
// // should return 4613732.
// sumFibs(4);
// // should return 5.
// sumFibs(75024);
// //  should return 60696.
// sumFibs(75025);
// //  should return 135721.
