// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

// split the string into an array of the words
// loop through the array
//      convert each character to its character code and then to its character
//      push each character once converted to a new array
//  return the new array

function binaryAgent(str) {
  let arrStr = str.split(" ");
  let hexArr = [];

  for (let i = 0; i < arrStr.length; i++) {
    hexArr.push(String.fromCharCode(parseInt(arrStr[i], 2)));
  }
  console.log(hexArr.join(""));
}

// TESTS
binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
// should return "Aren't bonfires fun!?"
binaryAgent(
  "01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"
);
// should return "I love FreeCodeCamp!"

// TIME: 27min
