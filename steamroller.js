// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let combined = combineArr(arr);
  console.log(combined);
}

function combineArr(arr) {
  let flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flatArray.push(arr[i]);
    } else {
      combineArr(flatArray);
    }
  }
  return flatArray;
}

steamrollArray([[["a"]], [["b"]]]);
// should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]);
// // should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]);
// //  should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]);
// // should return [1, {}, 3, 4].

// function steamrollArray(arr) {
//   var newArr = [];
//   newArr.push(arr[0]);
//   for (var i = 0; i < arr.length; ++i) {
//     for (var j = 0; j < arr[i].length; ++j) {
//       newArr.push(arr[i][j]);
//     }
//   }
//   console.log(newArr);
// }
