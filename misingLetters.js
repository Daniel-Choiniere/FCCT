// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

// convert all characters in str to their unicode values
// if the range between values is 26 than we can return undefined
// loop through the values
// if the next value is not +1 the previous value
// we return that value converted back to an alpha character

function fearNotLetter(str) {
  return str;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("aabcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
