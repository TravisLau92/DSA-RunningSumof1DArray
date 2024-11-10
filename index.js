// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function runningSum(nums) {
  const result = [];
  let sum = 0;

  for (const num of nums) {
    sum += num;
    result.push(sum);
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
console.log(`Original array: [${nums}]`);
console.log(`Running sum array: [${runningSum(nums)}]`);