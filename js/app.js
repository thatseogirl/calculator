const clearField = document.getElementById('reset');
const inputValue = document.getElementById('result');
const numberValues = document.querySelectorAll('.number');
const equalTo = document.getElementById('equal');
const del = document.getElementById('del');
const calculateSin = document.getElementById('sin');
const calculateCos = document.getElementById('cos');
const calculateTan = document.getElementById('tan');

clearField.addEventListener('click', handleReset);
numberValues.forEach(function (numberValue) {
  numberValue.addEventListener('click', handleClick);
});
equalTo.addEventListener('click', handleResult);
del.addEventListener('click', handleDelete);
calculateSin.addEventListener('click', handleTrig);
calculateCos.addEventListener('click', handleTrig);
calculateTan.addEventListener('click', handleTrig);
