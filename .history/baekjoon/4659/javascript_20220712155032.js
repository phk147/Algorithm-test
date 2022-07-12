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
  while (input[0] !== "end") {
    let s = input.shift().split("");
    let check1 = false;
    let vcnt = 0,
      lcnt = 0;
    let check3 = true;

    let a = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < s.length; i++) {
      //a e i o u check
      if (a.includes(s[i])) {
        check1 = true;
      }
      //모음, 자음 3개 연속 check
      if ((a.includes(s[i]) && a.includes(s[i + 1]) && a.includes(s[i + 2])) || (!a.includes(s[i]) && !a.includes(s[i + 1]) && !a.includes(s[i + 2]))) {
        if (i + 2 >= s.length) continue;
        check2 = false;
      }

      //같은 글자 연속, 단 ee, oo ok
      if (s[i] === s[i + 1]) {
        if (s[i] === "e" || s[i] === "o") continue;
        check3 = false;
      }
    }

    if (check1 && check2 && check3) {
      console.log(`<${s.join("")}> is acceptable.`);
    } else {
      console.log(`<${s.join("")}> is not acceptable.`);
    }
  }
}

solution();
