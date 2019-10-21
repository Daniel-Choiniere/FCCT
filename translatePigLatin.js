// Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word,
// moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// If a word does not contain a vowel, just add "ay" to the end.
// Input strings are guaranteed to be English words in all lowercase.

// check if word starts with a vowel
//     - just add way to the end and return
// check if word does not contain any vowels
//     - add ay to the end and return
// else take the first letter and move it to the end of the word and add ay

function translatePigLatin(str) {
  if (str[0].match(/[aeiouAEIOU]/)) {
    return str + "way";
  }

  if (str.match(/[aeiouAEIOU]/) == null) {
    return str + "ay";
  }

  var vowels = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiouAEIOU]/) == null) {
      vowels.push(str[i]);
    } else {
      break;
    }
  }
  var subStr = str.substr(vowels.length);

  for (var j = 0; j < vowels.length; j++) {
    subStr += str[j];
  }
  return subStr + "ay";
}

// console.log(translatePigLatin("algorithim"));
// console.log(translatePigLatin("rhythm"));
// console.log(translatePigLatin("glove"));

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
