//math functions

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

//var initialisations

let mainNumber;
let seconNumber;
let calculation = "NOT";

let displayMainNumber = "";
let displaySeconNumber = "";
let displayCalculation = "";

//da code

clearButton = document.querySelector("#buttonClear");

clearButton.addEventListener("click", function () {
  mainNumber = null;
  seconNumber = null;
  calculation = "NOT";

  displayMainNumber = "";
  displaySeconNumber = "";
  displayCalculation = "";

  display.textContent = "";
});

display = document.querySelector("p");

equalsButton = document.querySelector("#buttonEquals");

equalsButton.addEventListener("click", (e) => {
  if (calculation === "addition") {
    mainNumber = add(mainNumber, seconNumber);
    seconNumber = null;
    displaySeconNumber = "";
    displayMainNumber = mainNumber.toString();
  } else if (calculation === "multiply") {
    mainNumber = multiply(mainNumber, seconNumber);
    seconNumber = null;
    displaySeconNumber = "";
    displayMainNumber = mainNumber.toString();
  } else if (calculation === "subtract") {
    mainNumber = subtract(mainNumber, seconNumber);
    seconNumber = null;
    displaySeconNumber = "";
    displayMainNumber = mainNumber.toString();
  } else if (calculation === "divide") {
    mainNumber = divide(mainNumber, seconNumber);
    seconNumber = null;
    displaySeconNumber = "";
    displayMainNumber = mainNumber.toString();
  }

  display.textContent = displayMainNumber.toString();

  calculation = "NOT";
  displayCalculation = "";
});

additionButton = document.querySelector("#buttonPlus");

additionButton.addEventListener("click", function () {
  if (seconNumber !== null) {
    if (calculation === "addition") {
      mainNumber = add(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "multiply") {
      mainNumber = multiply(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "subtract") {
      mainNumber = subtract(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "divide") {
      mainNumber = divide(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    }
  }

  calculation = "addition";
  displayCalculation = " + ";
  display.textContent = mainNumber
    .toString()
    .concat(displayCalculation, displaySeconNumber);
});

subtractButton = document.querySelector("#buttonMinus");

subtractButton.addEventListener("click", function () {
  if (seconNumber !== null) {
    if (calculation === "addition") {
      mainNumber = add(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "multiply") {
      mainNumber = multiply(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "subtract") {
      mainNumber = subtract(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "divide") {
      mainNumber = divide(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    }
  }
  calculation = "subtract";
  displayCalculation = " - ";
  display.textContent = mainNumber
    .toString()
    .concat(displayCalculation, displaySeconNumber);
});

multiplyButton = document.querySelector("#buttonMultiply");

multiplyButton.addEventListener("click", function () {
  if (seconNumber !== null) {
    if (calculation === "addition") {
      mainNumber = add(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "multiply") {
      mainNumber = multiply(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "subtract") {
      mainNumber = subtract(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "divide") {
      mainNumber = divide(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    }
  }
  calculation = "multiply";
  displayCalculation = " * ";
  display.textContent = mainNumber
    .toString()
    .concat(displayCalculation, displaySeconNumber);
});

divideButton = document.querySelector("#buttonDivide");

divideButton.addEventListener("click", function () {
  if (seconNumber !== null) {
    if (calculation === "addition") {
      mainNumber = add(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "multiply") {
      mainNumber = multiply(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "subtract") {
      mainNumber = subtract(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    } else if (calculation === "divide") {
      mainNumber = divide(mainNumber, seconNumber);
      seconNumber = null;
      displaySeconNumber = "";
      displayMainNumber = mainNumber.toString();
    }
  }
  calculation = "divide";
  displayCalculation = " / ";
  display.textContent = mainNumber
    .toString()
    .concat(displayCalculation, displaySeconNumber);
});

numberButtons = document.querySelectorAll(".buttonsNumber");

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (calculation === "NOT") {
      displayCalculation = "";
      if (mainNumber == null) {
        mainNumber = Number(e.target.textContent);
      } else {
        mainNumber = Number(mainNumber.toString().concat(e.target.textContent));
      }
    } else {
      if (seconNumber == null) {
        seconNumber = Number(e.target.textContent);
      } else {
        seconNumber = Number(
          seconNumber.toString().concat(e.target.textContent)
        );
      }
    }

    if (mainNumber == null) {
      displayMainNumber = "";
    } else {
      displayMainNumber = mainNumber.toString();
    }

    if (seconNumber == null) {
      displaySeconNumber = "";
    } else {
      displaySeconNumber = seconNumber.toString();
    }

    display.textContent = mainNumber
      .toString()
      .concat(displayCalculation, displaySeconNumber);
  });
});
