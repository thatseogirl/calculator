const clearField = document.getElementById("reset");
const inputValue = document.getElementById("result");
const numberValues = document.querySelectorAll(".number");
const result = document.getElementById("equal");
const removedValue = document.getElementById("del");

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