function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim())
    .map((v) => +v);

  let numbers = input;
  let ans = new Array(numbers.length).fill(-1);
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    while (stack.length && numbers[stack.at(-1)] < num) {
      ans[stack.pop()] = num;
    }
    stack.push(i);
    console.log(i, stack, ans);
  }

  console.log(ans);
}

solution();
