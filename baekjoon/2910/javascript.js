/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

let [n, c] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let arr = input[0].split(" ").map((v) => +v);
function solution() {
  let answer = [];

  let count = [];

  // 카운트, 나온 순서
  for (let i = 0; i < arr.length; i++) {
    if (count.find((v) => v.num === arr[i])) {
      count[count.findIndex((v) => v.num === arr[i])].count++;
    } else {
      count.push({ num: arr[i], count: 1 });
    }
  }
  count.sort((a, b) => b.count - a.count);

  count.forEach((v) => {
    for (let i = 0; i < v.count; i++) {
      answer.push(v.num);
    }
  });
  console.log(answer.join(" "));
}

solution();
