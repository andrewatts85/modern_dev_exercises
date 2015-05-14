//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.[ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C

function celToFahren(c) {
  f = c * (9 / 5) + 32;
  return c + ' degrees ' + "C" + " is " + f + ' degrees ' + "F";
}

celToFahren(20);

function fahrenToCel(f) {
  c = (f - 32) / (9 / 5);
  return f + ' degrees ' + "F" + " is " + c + ' degrees ' + "C";
}

fahrenToCel(68);
