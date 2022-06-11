/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = Number(
    require("fs")
      .readFileSync("input.txt") //"/dev/stdin"
      .toString()
      .trim()
      .split("\n")
      .map((val) => val.trim())[0]
  );

  let cnt = 0;
  let num = 666;

  while (cnt <= input) {
    let stringNum = String(num);
    for (let i = 0; i < stringNum.length - 2; i++) {
      if (stringNum[i] === "6" && stringNum[i + 1] === "6" && stringNum[i + 2] === "6") {
        cnt++;
        break;
      }
    }

    if (cnt === input) {
      console.log(num);
      break;
    }

    num++;
  }
}

solution();
