// Check if the predicate (second argument) is truthy on all elements of a
// collection (first argument).

// In other words, you are given an array collection of objects. The predicate
// pre will be an object property and you need to return true if its value is truthy.
// Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when
// evaluated in a Boolean context.

// Loop through each object in the collection
//  on each iteration check if the object contains the "pre key", if not than we can return false
// otherwise return true

function truthCheck(collection, pre) {
  for (let i = 0; i < collection.length; i++) {
    for (let keyValue in collection[i]) {
      if (!collection[i][keyValue]) {
        return false;
      }
    }
    if (!collection[i].hasOwnProperty(pre)) {
      return false;
    }
  }
  return true;
}

// TESTS
console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
);
// should return true.

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" }
    ],
    "sex"
  )
);
// // // should return false.

console.log(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 }
    ],
    "age"
  )
);
// // // should return false.

console.log(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastFoward", onBoat: null }
    ],
    "onBoat"
  )
);
// // should return false

console.log(truthCheck([{ single: "double" }, { single: NaN }], "single"));
// should return false
