function spinalCase(str) {
  // Put space between uppercase words if no space
  let result = str.replace(/([A-Z])/g, " $1");
  let finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  // get rid of unwanted characters
  finalResult = finalResult.split("_").join(" ");

  // add the dashes between the words, and lowercase them
  let addDashes = finalResult
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();
  console.log(addDashes);
  return addDashes;
}

spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");
