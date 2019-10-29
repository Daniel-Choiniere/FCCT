// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let splitName = firstAndLast.split(" ");
  let first = splitName[0];
  let last = splitName[1];

  this.setFirstName = function() {
    this.firstName = first;
  };

  this.setLasttName = function() {
    this.lastName = last;
  };

  this.setFullName = function() {
    let fullName = first + " " + last;
  };

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return first + " " + last;
  };
};

var bob = new Person("Bob Ross");

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
