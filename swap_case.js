//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a JavaScript program that accepts a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(str) {
  var arr = str.split("");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (/[A-Z]/.test(arr[i])) {
      newArr.push(arr[i].toLowerCase());
    } else if (/[a-z]/.test(arr[i])) {
      newArr.push(arr[i].toUpperCase());
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}

var sample = "The Quick Brown Fox";
swapCase(sample);
