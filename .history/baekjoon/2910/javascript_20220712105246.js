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
let count = new Array(c + 1).fill(0);
let setArr = [...new Set(arr)];
function solution() {
  arr.forEach((v) => {
    count[v]++;
  });

  arr.sort(countSort);

  console.log(arr);
}

function countSort(a, b) {
  if (count[a] > count[b]) return a - b;
  else if (count[a] < count[b]) return b - a;
  else {
    if (setArr.indexOf(a) > setArr.indexOf(b)) return b - a;
    else return a - b;
  }
}

solution();
