let myCalculator = {
  multiplication: function(x, y) {
    let answer = x * y;
    return `the value is ${answer}`;
  },

  division: function(x, y) {
    let answer = x / y;
    return `the value is ${answer}`;
  },

  addition: function(x, y) {
    let answer = x + y;
    return `the value is ${answer}`;
  },

  substraction: function(x, y) {
    let answer = x - y;
    return `the value is ${answer}`;
  },

  exponential: function(x, y) {
    let answer = x ** y;
    return `the value is ${answer}`;
  }
};

console.log(mycalculator.addition(10, 3));
console.log(mycalculator.substraction(10, 3));
console.log(mycalculator.multiplication(10, 3));
console.log(mycalculator.division(10, 3));
console.log(mycalculator.exponential(10, 3));
