//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var arr = [1, 2, 3, 4];

function sum(a) {
  var total = 0;
  for (var i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
}

sum(arr);

function multiply(a) {
  var total = 1;
  for (var i = 0; i < a.length; i++) {
    total *= a[i];
  }
  return total;
}

multiply(a);
