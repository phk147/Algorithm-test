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
    .split("")
    .map((v) => v.toLowerCase())
    .join("");
  console.log(s);
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    if (97 <= c <= 122 || 0 < +c < 9) arr.push(s[i]);
  }
  console.log(arr);

  // s.forEach((c, i) => {
  //   if (isalnum(c)) {
  //     return c;
  //   } else {
  //     s.splice(i, 1);
  //   }
  // });

  // let left = 0;
  // let right = s.length - 1;
  // let check = true;
  // while (left < right) {
  //   console.log(left, right, s);
  //   if (left === right) break;

  //   if (s[left] !== s[right]) {
  //     check = false;
  //     break;
  //   }

  //   left++;
  //   right--;
  // }

  return check;
}

solution(input);
