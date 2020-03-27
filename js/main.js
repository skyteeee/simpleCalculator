class Calculator {
  constructor() {
    this.currentNumber = '0';
    this.input = [];
    this.display = '0';
  }

  addToCurrent(symbol) {
    this.currentNumber = this.currentNumber + symbol;
    console.log("number is ", this.currentNumber);
  }

  addAction (action) {
    let right = parseInt(this.currentNumber);
    this.input.push(right);
    this.currentNumber = '';
    this.input.push(action);
    this.display = this.display + action;
    this.setDisplay();
    console.log('Array is ',this.input);
  }

  calculate(array) {
    console.log('I want to calculate ', array);
    let currentNumber;
    let out;
    for (let idx = 0; idx < array.length; idx++) {
      currentNumber = array[idx];
      if (isNaN(currentNumber)) {
        switch (currentNumber) {
          case '*':
            out = array[idx - 1] * array[idx + 1];
            array.splice(idx - 1, 3, out);
            idx = 0;
            break;
          case '/':
            out = array[idx - 1] / array[idx + 1];
            array.splice(idx - 1, 3, out);
            idx = 0;
            break;
          default:
            break;
        }

      }

    }
    for (let idx = 0; idx < array.length; idx ++) {
      currentNumber = array[idx];
      if (isNaN(currentNumber)) {
        switch (currentNumber) {
          case '-':
            out = array[idx - 1] - array[idx + 1];
            break;
          case '+':
            out = array[idx - 1] + array[idx + 1];
            break;
        }
        array.splice(idx - 1, 3, out);
        idx = 0;
      }
    }
    console.log(array, array[0]);
    return array[0];

  }


  addNumber (number) {
    if (this.display !== '0') {
      this.display = this.display + number;
    } else {
      this.display = number;
    }
    this.addToCurrent(number);
    this.setDisplay();
  }

  clear () {
    this.display = '0';
    this.input = [];
    this.currentNumber = '0';
    this.setDisplay();
  }

  setDisplay () {
    let currentDisplay = document.getElementById("display");
    console.log('This is ours!!!', currentDisplay);
    currentDisplay.innerText = this.display;

  }

  equal () {
    if (this.input.length !== 0 && this.currentNumber.length !== 0) {
      let right = parseInt(this.currentNumber);
      this.input.push(right);
      let answer = this.calculate(this.input);
      this.display = answer;
      this.setDisplay();
      this.input = [];
      this.currentNumber = answer;
    } else {
      alert('Error. Check if everything you typed is right.');
      console.log('Error.')
    }

  }

}

let calc = new Calculator();

function onLoad() {
  calc.setDisplay();
}

window.onload = onLoad;
