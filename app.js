const clearField = document.getElementById("reset");
const inputValue = document.getElementById("result");
const numberValues = document.querySelectorAll(".number");
const result = document.getElementById("equal");
const removedValue = document.getElementById("del");
const calculateSin = document.getElementById("sin");
const calculateCos = document.getElementById("cos");
const calculateTan = document.getElementById("tan");

clearField.addEventListener("click", handleReset);
function handleReset() {
    inputValue.textContent = "";
}

function handleClick(event) {
    let currentValue = inputValue.textContent;
    let newValue = currentValue.concat(event.target.value);

    inputValue.textContent = newValue;
}

numberValues.forEach(function (numberValue) {
    numberValue.addEventListener("click", handleClick);
});

result.addEventListener("click", handleResult);
function handleResult() {
    let fianlResult = eval(inputValue.textContent);

    inputValue.textContent = fianlResult;
}

removedValue.addEventListener("click", handleDelete);

function handleDelete() {
    let currentValue = inputValue.textContent;
    let deletedValue = currentValue.slice(0, -1);

    inputValue.textContent = deletedValue;
}

calculateSin.addEventListener("click", handleSin);
function handleSin() {
    let sinResult = Math.sin(inputValue.textContent);

    inputValue.textContent = sinResult;
}

calculateCos.addEventListener("click", handleCos);
function handleCos() {
    let cosResult = Math.cos(inputValue.textContent);

    inputValue.textContent = cosResult;
}

calculateTan.addEventListener("click", handleTan);
function handleTan() {
    let tanResult = Math.tan(inputValue.textContent);

    inputValue.textContent = tanResult;
}
