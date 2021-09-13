function calculate(number) {
  


  return number = {
    result : 0,
    
    add(digit) {
      this.result += digit;
      return this;
    },
    sub(digit) {
      this.result -= digit;
      return this;
    },
    divide(digit) {
      this.result /= digit;
      return this;
    },
    multiply(digit) {
      this.result *= digit;
      return this
    },
    printResult() {
      console.log(this.result);
    }
  }
  }


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7