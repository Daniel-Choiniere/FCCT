// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// convert all characters in str to their unicode values
// if the range between values is 26 than we can return undefined
// loop through the values
// if the next value is not +1 the previous value
// we return that value converted back to an alpha character

function fearNotLetter(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";

  //   create an array of the alpahbet
  var arrAlphabet = alphabet.split("");

  //   check if the str is equal to the alphabet string if so just return undefined
  if (str == alphabet) {
    return undefined;
  }

  //    make indexes for our slice
  var alphabetIndex = arrAlphabet.indexOf(str[0]);
  var endAlphabetindex = arrAlphabet.indexOf(str[str.length - 1]);

  //   make a sub array of the alphabet to compare against what the str should be
  var slicedAlphabet = arrAlphabet.slice(alphabetIndex, endAlphabetindex);

  //   loop through the slicedAlphabet comparing the str, if we hit a letter that doesnt
  //   match we return the missng letter
  for (var i = 0; i <= slicedAlphabet.length; i++) {
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

// TIME 1:57
