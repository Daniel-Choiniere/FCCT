// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  var first, last;
  var splitName = function(wholeName) {
    wholeName = wholeName.split(" ");
    first = wholeName[0];
    last = wholeName[1];
    return first, last;
  };

  splitName(firstAndLast);

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return first + " " + last;
  };

  this.setFirstName = function(input) {
    first = input;
    return first;
  };

  this.setLastName = function(input) {
    last = input;
    return last;
  };

  this.setFullName = function(input) {
    return splitName(input);
  };
};

var bob = new Person("Bob Ross");
bob.getFullName();

// TESTS
console.log(Object.keys(bob).length);
// should return 6.
console.log(bob instanceof Person);
// should return true.
console.log(bob.firstName);
// should return undefined.
console.log(bob.lastName);
// should return undefined.
console.log(bob.getFirstName());
// // should return "Bob".
console.log(bob.getLastName());
// // should return "Ross".
console.log(bob.getFullName());
// should return "Bob Ross".

console.log("-----BREAK-----");

console.log(bob.getFullName());
// should return "Haskell Ross" after bob.setFirstName("Haskell").
console.log(bob.getFullName());
// should return "Haskell Curry" after bob.setLastName("Curry").
console.log(bob.getFullName());
// should return "Haskell Curry" after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName());
// should return "Haskell" after bob.setFullName("Haskell Curry").
console.log(bob.getLastName());
// should return "Curry" after bob.setFullName("Haskell Curry").
