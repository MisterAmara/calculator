const display = document.getElementById("display");
const equalsBtn = document.getElementById("equals");

function appendNumber(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = '';
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  equalsBtn.classList.add("equals-animate");

  try {
    // Convert × and ÷ to * and / before evaluation
    const expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }

  setTimeout(() => {
    equalsBtn.classList.remove("equals-animate");
  }, 400);
}

// ✅ Keyboard support
document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
    appendNumber(key);
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); // prevent form submission
    calculateResult();
  } else if (key === 'Backspace') {
    backspace();
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
