// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return "";
  };
  return firstAndLast;
};

// TESTS
Object.keys(bob).length;
// should return 6.
bob instanceof Person;
// should return true.
bob.firstName;
// should return undefined.
bob.lastName;
// should return undefined.
bob.getFirstName();
// should return "Bob".
bob.getLastName();
// should return "Ross".
bob.getFullName();
// should return "Bob Ross".
