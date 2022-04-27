function handleReset() {
    inputValue.textContent = "";
}

function handleClick(event) {
    let currentValue = inputValue.textContent;
    let newValue = currentValue.concat(event.target.value);
    inputValue.textContent = newValue;
}

function handleResult() {
    let fianlResult = eval(inputValue.textContent);
    inputValue.textContent = fianlResult;
}

function handleDelete() {
    let currentValue = inputValue.textContent;
    let deletedValue = currentValue.slice(0, -1);
    inputValue.textContent = deletedValue;
}

function handleTrig(event) {

    let input = inputValue.textContent;
    let value = event.target.value;
    let result;

    if (value === 'sin') {
        result = Math.sin(input).toFixed(3);
    } else if (value === 'cos') {
        result = Math.cos(input).toFixed(3);
    } else {
        result = Math.tan(input).toFixed(3);
    }

    inputValue.textContent = result;
}
