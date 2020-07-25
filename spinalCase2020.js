// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  // remove all spaces and replace with dashes, also remove underscores
  let dashesForSpaces = str.split(" ").join("-").split("_").join("-");
  // find the capital letters where new words start, split and add dahses
  let capitalsWithSpaces = dashesForSpaces
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  // remove the double dashes
  let noDoubleDash = capitalsWithSpaces.replace(/-+/g, "-");
  // console.log(noDoubleDash);
  return noDoubleDash;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
