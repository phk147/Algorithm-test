/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  logs = input.map((v) => v.split(" "));
  // 로그의 가장 앞 부분은 식별자다.
  // 문자로 구성된 로그가 숫자 로그보다 먼저온다.
  // 식별자는 순서에 영향을 주지않지만, 문자가 동일하면 식별자순
  // 숫자로그는 입력 순서대로

  let letter = [];
  let digit = [];

  for (let i = 0; i < logs.length; i++) {
    if (logs[i][1].charCodeAt(0) < 65) {
      digit.push(logs[i]);
    } else {
      letter.push(logs[i]);
    }
  }

  letter.sort((a, b) => {
    if (a.length === b.length) {
      return a.slice(1).join(" ").localeCompare(b.slice(1).join(" "));
    } else return b.join(" ").localeCompare(a.join(" "));
  });

  console.log(letter.concat(digit).map((v) => v.join(" ")));
}

solution();
