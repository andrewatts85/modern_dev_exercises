//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Create an expression using both Math.random and Math.floor to generate a random integer between two variables, high and low, where high is greater than low.

function randomInt(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}

randomInt(50, 100);
