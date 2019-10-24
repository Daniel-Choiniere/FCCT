// Convert a string to spinal case.
// Spinal case is all-lowercase-words-joined-by-dashes.

// convert the string to all lowercase
// split the string into an array at the spaces, dashes, or underscores into a new array
// loop through the array and build up a new string adding the dasehes

function spinalCase(str) {
  var destroyedCamelCase = str
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .split(" ")
    .join("-")
    .split("_")
    .join("-")
    .split("--")
    .join("-");
  //   console.log(destroyedCamelCase);

  // var splitArr = destroyedCamelCase
  //   .toLowerCase()
  //   .split(" ")
  //   .join("-")
  //   .split("_")
  //   .join("-")
  //   .split("--")
  //   .join("-");
  return destroyedCamelCase;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
