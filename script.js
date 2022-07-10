class Calculator {
  constructor(prevOperandTextElem, currOperandTextElem) {
    this.prevOperandTextElem = prevOperandTextElem;
    this.currOperandTextElem = currOperandTextElem;
    this.clear();
  }
  clear() {
    this.currOperand = "";
    this.prevOperand = "";
    this.operation = undefined;
  }

  delete() {}
  appendNum(number) {
    if (number === "." && this.currOperand.includes(".")) return;
    this.currOperand = this.currOperand.toString() + number.toString();
  }
  chooseOper(operation) {
    if (this.currOperand === "") return;
    if (this.prevOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.prevOperand = this.currOperand;
    this.currOperand = "";
  }

  compute() {
    let computation;
    const prev = parseFloat(this.prevOperand);
    const curr = parseFloat(this.currOperand);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (this.operation) {
      case "+":
        computation = prev + curr;
        break;
      case "-":
        computation = prev - curr;
        break;
      case "*":
        computation = prev * curr;
        break;
      case "÷":
        computation = prev / curr;
        break;
      default:
        return;
    }
    this.currOperand = computation;
    this.operation = undefined;
    this.prevOperand = "";
  }

  updateDisplay() {
    this.currOperandTextElem.innerText = this.currOperand;
    this.prevOperandTextElem.innerText = this.prevOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const prevOperandTextElem = document.querySelector("[data-pev]");
const currOperandTextElem = document.querySelector("[data-curr]");
const clearButton = document.querySelector("[data-clear]");

const calculator = new Calculator(prevOperandTextElem, currOperandTextElem);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOper(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});
