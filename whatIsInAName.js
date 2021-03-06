// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
// because it contains the name and its value, that was passed on as the second argument.

// Loop through the collection
//    Check the current iteration of collection, if it matches the source than push to a nerw array
//  Return the new array

// TIME: 3.5 hrs
// Was more difficult than I first estimated. Was trying various methods with multiple for loops, and trying to use indexOf.
// At first I was able to pass all test cases with only one source object, but tests with more than one I had to reevaluate
// Need to get more comfortable working with arrays of  objects.

function whatIsInAName(collection, source) {
  let arr = collection.filter(function(item) {
    for (let match in source) {
      if (source[match] != item[match]) {
        return false;
      }
    }
    return true;
  });
  console.log(arr);
}
//
//
//
//
//
var test1 = whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);

var test2 = whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
  apple: 1
});

var test3 = whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);

var test4 = whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

var test5 = whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 }
  ],
  { apple: 1, bat: 2 }
);

var test6 = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
