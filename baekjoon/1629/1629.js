/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

const fs = require("fs");
const [A, B, C] = fs.readFileSync("input.txt").toString().trim().split(" ").map(BigInt);

function pow(a, b) {
  if (b == 0) {
    return BigInt(1);
  } else {
    const temp = pow(a, BigInt(parseInt(b / BigInt(2))));
    console.log(parseInt(temp));
    console.log("b", b % BigInt(2));
    if (b % BigInt(2) == 0) {
      return (temp * temp) % C;
    } else {
      return (temp * temp * a) % C;
    }
  }
}

console.log(parseInt(pow(A, B)));
