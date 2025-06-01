let display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendDecimal(dot) {
  if (!display.value.includes(".")) {
    display.value += dot;
  }
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}
