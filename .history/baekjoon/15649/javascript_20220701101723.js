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

let [n, m] = input.shift().split(" ");
function solution() {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let P = Permutation(arr, m);

  P = P.map((v) => v.join("").split(",").join("").split("").join(" "));

  console.log(P.join("\n"));
}
function Permutation(arr, r) {
  const result = [];
  if (r === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index, org) => {
    const rest = [...org.slice(0, index), ...org.slice(index + 1)];
    const permutation = Permutation(rest, r - 1);
    const attached = permutation.map((numbers) => [fixed, ...numbers]);
    result.push(...attached);
  });
  return result;
}
solution();
