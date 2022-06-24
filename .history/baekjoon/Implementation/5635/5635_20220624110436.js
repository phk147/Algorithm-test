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

  let max_y = -Infinity;
  let min_y = Infinity;
  let max_m = -Infinity;
  let min_m = Infinity;
  let max_d = -Infinity;
  let min_d = Infinity;

  arr.forEach((v) => {
    let year = v[3];
    let month = v[2];
    let day = v[1];
    if(year === max_y){
      if(month === max_m){
        max_d = Math.max(max_d, month);
        min_d = Math.min(min_d, month);
      }
      max_m = Math.max(max_m, month);
      min_m = Math.min(min_m, month);
    } else {
      max_y = Math.max(max_y, year);
      min_y = Math.min(min_y, year);
    }
  });

  let maxArr = arr.filter((v) => v[3] <= min);
  let minArr = arr.filter((v) => v[3] >= max);

  let parent="";
  let child = "";

  if()

  console.log(arr, maxArr, minArr);
}

solution(input);
