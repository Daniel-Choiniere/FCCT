// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument).
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
// and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument),
// because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
  var answer = [];

  for (var i = 0; i < collection.length; i++) {
    // console.log(collection[i]);
    var collectionKeys = Object.keys(collection[i]);
    var sourceKeys = Object.keys(source);

    var collectionValues = Object.values(collection[i]);
    var sourceValues = Object.values(source);

    // console.log("Collection keys", collectionKeys);
    // console.log("Source keys", sourceKeys);
    // console.log("Collection values", collectionValues);
    // console.log("Source values", sourceValues);

    // if (collection[i].indexOf(sourceValues[i])) {
    // console.log(collection[i]);``
    // console.log(sourceValues[i]);

    if (Object.values(collection[i]).indexOf(sourceValues[0]) > -1) {
      console.log(collection[i]);
    }
  }
  // return answer;
}

// var obj = { a: "test1", b: "test2" };
// if (Object.values(obj).indexOf("test1") > -1) {
//   console.log("has test1");
// }
//
//
//
//
//
//
//
//
// var test1 = whatIsInAName(
//   [
//     { first: "Romeo", last: "Montague" },
//     { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }
//   ],
//   { last: "Capulet" }
// );

// var test2 = whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//   apple: 1
// });

// var test3 = whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// );

// DOES NOT PASS - NEED TO HANDLE CHECKING BOTH THE SOURCE KEYS NOT JUST ONE
// var test4 = whatIsInAName(
//   [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, cookie: 2 }
// );

// DOES NOT PASS
// var test5 = whatIsInAName(
//   [
//     { apple: 1, bat: 2 },
//     { apple: 1 },
//     { apple: 1, bat: 2, cookie: 2 },
//     { bat: 2 }
//   ],
//   { apple: 1, bat: 2 }
// );

// DOES NOT PASS
// var test6 = whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 });
