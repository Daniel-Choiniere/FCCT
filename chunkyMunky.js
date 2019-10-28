// Write a function that splits an array (first argument) into groups the length of size
//    (second argument) and returns them as a two-dimensional array.

// loop through the array
//      splice off the chunks at the o, size
//      push the spliced chunks to a new array one at a time
//     return the new array of array chunks

// TIME 30 mins
function chunkArrayInGroups(arr, size) {
  let newArr = [];
  let ogLength = arr.length;

  for (let i = 0; i < ogLength; i += size) {
    let spliced = arr.splice(0, size);
    newArr.push(spliced);
  }
  console.log(newArr);
}

// TESTS
chunkArrayInGroups(["a", "b", "c", "d"], 2);
// should return [["a", "b"], ["c", "d"]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// // should return [[0, 1, 2], [3, 4, 5]].

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// // should return [[0, 1], [2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// // should return [[0, 1, 2, 3], [4, 5]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// // should return [[0, 1, 2], [3, 4, 5], [6]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// // should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].

// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// // /should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
