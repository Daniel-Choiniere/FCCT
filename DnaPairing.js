// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Split the string into an array of it's characters
// loop through the string and build a multi-dimensional array, with an inner array for each pair
// - build the new array up
// - match the pairs up with thier counterpart
// return the completed array
3;
function pairElement(str) {
  var dnaPairs = {
    G: "C",
    C: "G",
    T: "A",
    A: "T"
  };

  var arr1 = str.split("");
  var arr2 = [];

  for (i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i].split(",");
    arr2[i][1] = dnaPairs[arr1[i]];
  }
  return arr2;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

// TIME = 47mins
