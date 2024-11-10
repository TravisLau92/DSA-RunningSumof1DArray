Title: Running Sum of 1d Array Algorithm Challenge
Objective:
In this coding exercise, you will create a JavaScript function to compute the running sum of a 1D array. The running sum at each index is the sum of all elements in the array from index 0 to that particular index, inclusive. You are advised to use a for...of loop for this challenge.

Create a function named `runningSum(nums)` that takes an array of integers (`nums`) as input and returns a new array containing the running sum.

When using the following input:
```js
const nums = [1, 2, 3, 4, 5];
console.log(`Original array: [${nums}]`);
console.log(`Running sum array: [${runningSum(nums)}]`);
```

For example, after implementing the function, you should be able to produce the following output:
```js
Original array: [1, 2, 3, 4, 5]
Running sum array: [1, 3, 6, 10, 15]
```

Helpful resources:
- The for...of loop documentation on the Mozilla Developer Network (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- Template literals documentation on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

<details>
<summary>Hints</summary>
  
1. Create a function `runningSum(nums)` that accepts an array `nums`.
2. Initialize a variable named `sum` to keep track of the running sum, and an empty array named `result` to store the running sum array.
3. Use a for...of loop to iterate through each element of the input array `nums`.
4. Inside the loop, add the current element to the `sum` and push the value of `sum` to the `result` array.
5. After the loop, return the `result` array.
6. Call the function with an appropriate input array and log the original array and the running sum array using template literals.
7. Make sure to use camel case for variable names.
8. Use template literals when logging the output to the console.
</details>