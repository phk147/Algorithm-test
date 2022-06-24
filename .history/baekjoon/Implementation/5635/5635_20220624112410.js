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
function solution(input) {
  //input
  let n = +input.shift();
  let arr = [];

  for (let i = 0; i < n; i++) {
    let temp = input.shift().split(" ");
    arr.push(temp);
  }

  let birth = [];
  let num = [];
  arr.forEach((v) => {
    let year = v[3];
    let month = v[2];
    let day = v[1];

    if (month.length === 1) {
      month = "0" + month;
    }
    if (day.length === 1) {
      day = "0" + day;
    }
    let temp = [year, month, day].join("");
    num.push(temp);
    birth.push({ temp: v[0] });
  });

  let old = Math.min(...num);
  let young = Math.max(...num);

  console.log(old, young);

  console.log(birth[old]);
  console.log(birth[young]);
}

solution(input);
