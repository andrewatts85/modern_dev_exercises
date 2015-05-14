//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashes(num) {
  var str = num.toString();
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
      arr.splice(i + 1, 1, "-" + arr[i + 1]);
    }

  }
  newStr = arr.join("");
  return newStr;
}

var x = "025468";
insertDashes(x);
