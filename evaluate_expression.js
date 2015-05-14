//learn.modern-developer.com
//Logic: JavaScript Programming Exercises

//Write a function named evaluateExpression(), that takes three arguments: two operands and an operator, and returns the number that results from applying the operator to the operands. For example: evaluateExpression(5, 7, ‘+’).

function evaluateExpression(num1, num2, op) {
  return eval(num1 + op + num2);
}

evaluateExpression(5, 7, '+');
