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

//Whenever number is pressed, append it to a list. then,
//whatever symbol is pressed is saved, so for the next number pressed,
//it appends the list with number[-2] symbol number[-1], so the list
//is always only 2 items long really

let numbersList = [];
let calculation;

clearButton = document.querySelector("#buttonClear");

clearButton.addEventListener("click", function () {
  numbersList.length = 0;
  display.textContent = numbersList[0];
});

display = document.querySelector("p");

additionButton = document.querySelector("#buttonPlus");

additionButton.addEventListener("click", function () {
  calculation = "addition";
});

//add equals button and always perform the calculation on that
//this way you can have numbers more than one digit long

button0 = document.querySelector("#button0");

/*
  else if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }*/

button0.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "NOT") {
  }
  display.textContent = numbersList[0];
});

button1 = document.querySelector("#button1");

button1.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button2 = document.querySelector("#button2");

button2.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button3 = document.querySelector("#button3");

button3.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button4 = document.querySelector("#button4");

button4.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button5 = document.querySelector("#button5");

button5.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button6 = document.querySelector("#button6");

button6.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button7 = document.querySelector("#button7");

button7.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button8 = document.querySelector("#button8");

button8.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});

button9 = document.querySelector("#button9");

button9.addEventListener("click", function () {
  numbersList.push(Number(this.textContent));
  if (calculation === "addition" && numbersList.length > 1) {
    numbersList = [add(numbersList[0], numbersList[1])];
    display.textContent = numbersList[0];
  }
  display.textContent = numbersList[0];
});
