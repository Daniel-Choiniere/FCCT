// Return true if the string in the first element of the array contains all of the
// letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the
// letters in the second string are present in the first, ignoring case.

function mutation(arr) {
  let first = arr[0].toLowerCase();
  let last = arr[1].toLowerCase();

  for (let i = 0; i < last.length; i++) {
    if (first.indexOf(last[i]) == -1) {
      return false;
    }
  }
  return true;
}

// TESTS
console.log(mutation(["hello", "hey"]));
// should return false.
console.log(mutation(["hello", "Hello"]));
// // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
// // should return true.
console.log(mutation(["Mary", "Army"]));
// // should return true.
console.log(mutation(["Mary", "Aarmy"]));
// // should return true.
console.log(mutation(["Alien", "line"]));
// // should return true.
