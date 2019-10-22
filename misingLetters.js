// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// convert all characters in str to their unicode values
// if the range between values is 26 than we can return undefined
// loop through the values
// if the next value is not +1 the previous value
// we return that value converted back to an alpha character

function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var arrAlphabet = alphabet.split("");
  //   console.log(arrAlphabet);

  if (str == alphabet) {
    return undefined;
  }

  var alphabetIndex = arrAlphabet.indexOf(str[0]);
  var endAlphabetindex = arrAlphabet.indexOf(str[str.length - 1]);
  //   console.log(alphabetIndex, endAlphabetindex);

  var slicedAlphabet = arrAlphabet.slice(alphabetIndex, endAlphabetindex);
  //   console.log("Sliced Alphabet: " + slicedAlphabet);

  for (var i = 0; i <= slicedAlphabet.length; i++) {
    // console.log("SLICED ALPHA INDEX: " + slicedAlphabet[i]);
    // console.log("STR INDEX: " + str[i]);

    if (slicedAlphabet[i] != str[i]) {
      return slicedAlphabet[i];
    }
  }
}

// console.log(fearNotLetter("abce")); passing
// console.log(fearNotLetter("abcdefghjklmno")); passing
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); passing

// TIME 1:45 ONGOING
