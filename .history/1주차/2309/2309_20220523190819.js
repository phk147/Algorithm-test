/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution() {
  let input = require("fs")
    .readFileSync("input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  input.sort((a, b) => a - b);
  console.log(input);

  do {
    let psum = 0;
    for (let i = 0; i < 7; i++) psum;
  } while (permutation(input, 7));

  console.log(input.slice(0, 7));
}

solution();
