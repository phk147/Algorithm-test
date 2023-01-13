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
  while (1) {
    let word = input.shift();
    if (word === "end") return;
    if (word.length === 1) {
      console.log(`<${word}> is acceptable.`);
      continue;
    }

    word = word.split("");
    let check1 = false;
    let check2 = true;
    let vcnt = 0;
    let lcnt = 0;
    let check3 = true;

    let a = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < word.length; i++) {
      //a e i o u check
      if (a.includes(word[i])) {
        check1 = true;
      }
      //모음, 자음 3개 연속 check
      if (a.includes(word[i])) {
        vcnt++;
        lcnt = 0;
      } else {
        vcnt = 0;
        lcnt++;
      }

      if (vcnt === 3 || lcnt === 3) {
        check2 = false;
      }

      //같은 글자 연속, 단 ee, oo ok
      if (word[i] === word[i + 1]) {
        if (word[i] === "e" || word[i] === "o") continue;
        check3 = false;
      }
    }

    if (check1 && check2 && check3) {
      console.log(`<${word.join("")}> is acceptable.`);
    } else {
      console.log(`<${word.join("")}> is not acceptable.`);
    }
  }
}

solution();
