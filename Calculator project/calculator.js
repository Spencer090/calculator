
// CALCULATOR PROGRAM
const display = document.getElementById("display");
  
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculator() {
    try {
        let result = new Function(`return ${display.value}`)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}


