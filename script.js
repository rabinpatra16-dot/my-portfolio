// এই ৩টা variable দিয়ে সব কিছু চলে
let currentNumber = '0';   // এখন যা দেখাচ্ছে
let previousNumber = '';   // আগের number
let operator = '';         // কোন operation (+, -, *, /)

// Display update করার function
function updateDisplay() {
  document.getElementById('display').value = currentNumber;
}

// Number button চাপলে
function calcNum(num) {
  if (currentNumber === '0') {
    currentNumber = num;       // '0' এর জায়গায় নতুন number
  } else {
    currentNumber = currentNumber + num;  // পুরনোটার সাথে যোগ
  }
  updateDisplay();
}

// Operator button চাপলে (+, -, *, /)
function calcOp(op) {
  previousNumber = currentNumber;  // আগের number save করো
  operator = op;                   // operator save করো
  currentNumber = '0';             // display reset
}

// = চাপলে
function calcEq() {
  let a = parseFloat(previousNumber);  // string কে number বানাও
  let b = parseFloat(currentNumber);

  let result = 0;

  if (operator === '+') result = a + b;
  if (operator === '-') result = a - b;
  if (operator === '*') result = a * b;
  if (operator === '/') result = a / b;

  currentNumber = String(result);  // number কে string বানাও
  operator = '';
  previousNumber = '';
  updateDisplay();
}

// AC চাপলে — সব reset
function calcFn(fn) {
  if (fn === 'clear') {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    updateDisplay();
  }
}