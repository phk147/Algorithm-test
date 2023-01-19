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
function solution() {

  let num = +input.shift();

  let result = [1,1];

  // 2친수는 0으로 시작하지 않는다.

  // 2친수는 1이 두번 연속으로 나타나지 않는다.

  for (let i = 2; i< num; i++) {
    result[i] = BigInt(result[i-1]) + BigInt(result[i-2]);
}

console.log(String(result[num - 1]));

}

solution();
