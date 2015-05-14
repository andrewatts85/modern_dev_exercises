//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a JavaScript function to remove specified number of characters from a string. Test Data : console.log(truncate_string("Robin Singh”,4)); "Robi"

function truncateString(str, num) {
  return str.substr(0, num);
}

truncateString("Robin Singh", 4);
