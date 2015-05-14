//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a function findLongestWord() that takes an array of words and returns the length of the longest word.

function findLongestWord(words) {
  var longestWord = 0;
  var match;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
      match = words[i];
    }
  }
  return match;
}
var arr = ["I", "am", "the", "greatest", "!"];

findLongestWord(arr);
