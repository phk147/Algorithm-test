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
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let arr = input.slice(1, input.length);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let grade = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
      }
    }
    result.push(grade);
  }

  console.log(result.join(" "));
}

solution();

// let [n, ...arr] = input;
//   let li = [];
//   let ans = [];

//   for (let i = 0; i < n; i++) {
//     let [x, y] = arr[i].split(" ");
//     li.push([x, y]);
//   }

//   for (let i = 0; i < n; i++) {
//     let cnt = li.filter((p) => li[i][0] < p[0] && li[i][1] < p[1]).length + 1;
//     ans.push(cnt);
//   }

//   console.log(ans.join(" "));
