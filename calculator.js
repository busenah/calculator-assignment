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
