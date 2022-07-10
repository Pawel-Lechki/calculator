class Calculator {
  constructor(prevOperandTextElem, currOperandTextElem) {
    this.prevOperandTextElem = prevOperandTextElem || document;
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
    this.currOperand = number;
  }
  chooseOper(operation) {}

  compute() {}

  updateDisplay() {
    this.currOperandTextElem.innerText = this.currOperand;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const prevOperandTextElem = document.querySelector("[data-pev]");
const currOperandTextElem = document.querySelector("[data-curr]");
const clearButton = document.querySelector("[data-clear]");

const claculator = new Calculator(prevOperandTextElem, currOperandTextElem);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    claculator.appendNum(button.innerHTML);
    claculator.updateDisplay();
  });
});
