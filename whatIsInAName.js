// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
// because it contains the name and its value, that was passed on as the second argument.

// function whatIsInAName(collection, source) {
//   var answer = [];
//   collection.forEach(function(element) {
//     // console.log(element.last);
//     // console.log(source.last);
//     if (element.last == source.last) {
//       answer.push(element);
//     }
//   });
//   return answer;
// }

function whatIsInAName(collection, source) {
  var answer = [];

  for (var i = 0; i < collection.length; i++) {
    // console.log(collection[i]);
    var collectionKeys = Object.keys(collection[i]);
    var sourceKeys = Object.keys(source);
    // console.log("Collection keys", collectionKeys);
    // console.log("Source keys", sourceKeys);
  }
  return answer;
}

//
//
//
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

console.log("Test ONE: " + test1);
console.log("Test TWO: " + test2);
console.log("Test THREE: " + test3);
console.log("Test FOUR: " + test4);
console.log("Test FIVE: " + test5);
console.log("Test SIX: " + test6);
