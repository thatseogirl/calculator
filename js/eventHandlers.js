function handleReset() {
    inputValue.textContent = "";
}

function handleClick(event) {
    const currentValue = inputValue.textContent;
    const newValue = currentValue.concat(event.target.value);
    inputValue.textContent = newValue;
}

function handleResult() {
    const fianlResult = eval(inputValue.textContent);
    inputValue.textContent = fianlResult;
}

function handleDelete() {
    const currentValue = inputValue.textContent;
   const deletedValue = currentValue.slice(0, -1);
    inputValue.textContent = deletedValue;
}

function handleTrig(event) {

    const input = inputValue.textContent;
    const value = event.target.value;
    const result;

    if (value === 'sin') {
        result = Math.sin(input).toFixed(3);
    } else if (value === 'cos') {
        result = Math.cos(input).toFixed(3);
    } else {
        result = Math.tan(input).toFixed(3);
    }

    inputValue.textContent = result;
}
