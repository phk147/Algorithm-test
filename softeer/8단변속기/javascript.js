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

let ascend = [...input].sort((a, b) => a - b);
let descend = [...input].sort((a, b) => b - a);

let ascendCheck = true;
let descendCheck = true;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== ascend[i]) ascendCheck = false;
  if (input[i] !== descend[i]) descendCheck = false;
}

if (ascendCheck) console.log("ascending");
else if (descendCheck) console.log("descending");
else console.log("mixed");
