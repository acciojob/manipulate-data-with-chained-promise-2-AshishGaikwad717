//your JS code here. If required.
// Select the output element
const outputDiv = document.getElementById("output");

// Function that returns a promise resolving with an array of numbers after 3 seconds
const getNumbers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 3000);
  });
};

// Function to filter out odd numbers
const filterOddNumbers = (numbers) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = numbers.filter((num) => num % 2 === 0);
      outputDiv.textContent = `Filtered Array (Even Numbers): [${filtered}]`;
      resolve(filtered);
    }, 1000);
  });
};

// Function to multiply even numbers by 2
const multiplyEvenNumbers = (numbers) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multiplied = numbers.map((num) => num * 2);
      outputDiv.textContent = `Final Array (Doubled Even Numbers): [${multiplied}]`;
      resolve(multiplied);
    }, 2000);
  });
};

// Chaining the promises
getNumbers()
  .then((numbers) => filterOddNumbers(numbers))
  .then((filtered) => multiplyEvenNumbers(filtered))
  .catch((error) => {
    outputDiv.textContent = `Error: ${error.message}`;
  });
