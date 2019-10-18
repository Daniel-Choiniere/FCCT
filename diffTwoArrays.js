// Compare two arrays and return a new array with any items only found in one
// of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr2.indexOf(arr1[i]) == -1) {
      if (arr1[i] !== undefined) {
        newArr.push(arr1[i]);
      }
    }

    if (arr1.indexOf(arr2[i]) == -1) {
      if (arr2[i] !== undefined) {
        newArr.push(arr2[i]);
      }
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

// TIME =
