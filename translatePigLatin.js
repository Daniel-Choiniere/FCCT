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
  for (var i = 0; i < str.length; i++) {
    if (str[i].indexOf("a", "e", "i", "o", "u") != -1) {
      var pigged = str + "way";
    }
  }
  return pigged;
}

console.log(translatePigLatin("algorithim"));
