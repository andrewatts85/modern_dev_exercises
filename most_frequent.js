//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a JavaScript program to find the most frequent item of an array. Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5 times ).

function mostFrequent(arr) {
  var order = arr.sort();
  var count = 1;
  var most = 1;
  var mostEl;
  for (var i = 0; i < order.length; i++) {
    if (order[i] === order[i + 1]) {
      count++;
    } else if (order[i] !== order[i + 1] && count > most) {
      most = count;
      mostEl = order[i] + " ( " + count + " times )";
      count = 1;
    } else if (order[i] !== order[i + 1]) {
      count = 1;
    }
  }
  return mostEl;
}

var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

mostFrequent(arr);
