const myOutput = document.getElementById('output');
const myForm = document.querySelector('form');

// Defining some arrays

let numbersOne = [1, 4, 5, 7];
let numbersTwo = [23, 4, 65, 12];
let numbersThree = [1, 2];

// Use the filter method to fill an array with the numbers which are divisible by two

const evenNum = numbersOne.filter((num) => num % 2 === 0);

//Use the reduce method, to return the total of each array

const arrSum = numbersOne.reduce(
  (previousNum, currentNum) => previousNum + currentNum
);

const mySum = document.getElementById('sum');
const myEven = document.getElementById('even');
const myText = document.getElementById('myText');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const myTextValue = myText.value;
  const numbers = myTextValue.split(',').map((elem) => parseInt(elem));
  const sum = numbers.reduce(
    (previousNum, currentNum) => previousNum + currentNum
  );
  const even = numbers.filter((num) => num % 2 === 0);
  if (numbers.length < 2) {
    myOutput.innerHTML = `Enter at least 2 numbers, separated by commas`;
  } else if (myEven.checked) {
    myOutput.innerHTML = `The even numbers are: ${even}.`;
  } else if (mySum.checked) {
    myOutput.innerHTML = `The sum of the numbers is ${sum}.`;
  } else {
    myOutput.innerHTML = `Select an operation`;
  }
});

// 4️⃣ Add JavaScript so that when the user clicks the button, one of the functions is run and the result is shown on the page.

// The input should be given in the first input box as a string. The user should be able to enter numbers, separated by commas. In JavaScript, you'll convert this string to an array of numbers.

// Based on which radio button is selected, choose which function to run. Pass an array as an argument to the particular function.

// Finally, return the result from the function and display it on the page.
