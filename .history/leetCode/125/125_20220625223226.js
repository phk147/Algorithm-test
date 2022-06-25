let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution(input) {
  //input
  let s = input[0];

  //Submit
  s = s
    .split(" ")
    .map((v) => v.toLowerCase())
    .join("")
    .split("");

  s.forEach((c, i) => {
    if (isalnum(c)) {
      return c;
    } else {
      s.splice(i, 1);
    }
  });

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s.right) return false;

    left++;
    right--;
  }
  console.log(s);
}

function isalnum(c) {
  return (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
}

solution(input);
