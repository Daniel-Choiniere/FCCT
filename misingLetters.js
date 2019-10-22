// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// convert all characters in str to their unicode values
// if the range between values is 26 than we can return undefined
// loop through the values
// if the next value is not +1 the previous value
// we return that value converted back to an alpha character

// function fearNotLetter(str) {
//   var arr = [];
//   for (var i = 0; i < str.length; i++) {
//     arr.push(str[i].charCodeAt());
//   }

//   for (var i = 1; i < arr.length; i++) {
//     if (arr[0] + 1 == arr[1]) {
//       return String.fromCharCode(arr[0] + 1);
//     }
//   }

//   return arr;
// }

function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var arrAlphabet = alphabet.split("");
  //   console.log(arrAlphabet);

  if (str == alphabet) {
    return "undefined";
  }

  var alphabetIndex = arrAlphabet.indexOf(str[0]);
  var endAlphabetindex = str.length;
  //   console.log(alphabetIndex);
  //   console.log(endAlphabetindex);

  var slicedAlphabet = arrAlphabet.slice(alphabetIndex, endAlphabetindex);
  //   console.log(slicedAlphabet);

  for (var i = 0; i <= slicedAlphabet.length; i++) {
    // console.log("SLICED ALPHA INDEX: " + slicedAlphabet[i]);
    // console.log("STR INDEX: " + str[i]);

    if (slicedAlphabet[i] != str[i]) {
      return slicedAlphabet[i];
    }
  }
  //   return;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("aabcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

// TIME 1:45 ONGOING
