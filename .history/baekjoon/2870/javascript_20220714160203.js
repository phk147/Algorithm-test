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

let n = +input.shift();
function solution() {
  let nums = [];
  for (let i = 0; i < n; i++) {
    let temp = input.shift();
    let n = "";

    for (let j = 0; j < temp.length; j++) {
      let tmp = temp.charCodeAt(j);
      //number
      if (!(tmp >= 97 && tmp <= 122)) {
        let num = String.fromCharCode(tmp);
        console.log(num);
        if (num === "0") {
          if (temp[j + 1] === "0") continue;
          else if (temp.charCodeAt(j + 1) >= 97 && temp.charCodeAt(j + 1) <= 122) {
            nums.push(num);
          } else {
            continue;
          }
        }
        n += num;
      }
      if (temp.charCodeAt(j + 1) >= 97 && temp.charCodeAt(j + 1) <= 122) {
        if (n !== "") {
          nums.push(n);
          n = "";
        }
      }
    }
  }

  console.log(nums);
}

solution();
