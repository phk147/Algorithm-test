let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let s = input[0];
  let num = +input[1];

  // Submit
  if (num === 1) {
    return s;
  }

  const len = s.length;
  const arr = [...Array(num)].map((r) => []);

  for (let i = 0; i < len; i++) {
    const pos = i % (2 * num - 2);
    const position = pos < num ? pos : 2 * num - 2 - pos;
    arr[position].push(s[i]);
  }
  console.log(arr);
  return arr.map((r) => r.join("")).join("");
}

solution(input);
