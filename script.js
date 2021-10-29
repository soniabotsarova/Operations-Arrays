const myOutput = document.getElementById('output');
const myForm = document.querySelector('form');
const mySum = document.getElementById('sum');
const myEven = document.getElementById('even');
const myMulti = document.getElementById('multiply');
const myText = document.getElementById('myText');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const myTextValue = myText.value;
  const numbers = myTextValue.split(',').map((elem) => parseInt(elem));
  const sum = numbers.reduce(
    (previousNum, currentNum) => previousNum + currentNum
  );
  const even = numbers.filter((num) => num % 2 === 0);

  const multiply = numbers.map((num) => num * 2);

  if (numbers.length < 2) {
    myOutput.innerHTML = `Enter at least 2 numbers, separated by commas.`;
  } else if (myEven.checked) {
    myOutput.innerHTML = `The even numbers are: ${even}.`;
  } else if (mySum.checked) {
    myOutput.innerHTML = `The sum of the numbers is ${sum}.`;
  } else if (myMulti.checked) {
    myOutput.innerHTML = `Your numbers now are ${multiply}.`;
  } else {
    myOutput.innerHTML = `Select an operation`;
  }
});
