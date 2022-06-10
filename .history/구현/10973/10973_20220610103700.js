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

  let n = Number(input.splice(0, 1)[0]);
  arr = input[0]
    .split(" ")
    .join("")
    .split("")
    .map((v) => +v);

  let flag = 0;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i - 1] > arr[i]) {
      let tmp = arr.splice(i, n - i);
      let tmpMax = 0;
      let tmpIdx = -100;
      for (let j = tmp.length - 1; j >= 0; j--) {
        if (arr[arr.length - 1] > tmp[j] && tmp[j] > tmpMax) {
          tmpMax = tmp[j];
          tmpIdx = j;
        }
      }

      let num = arr[arr.length - 1];
      arr[arr.length - 1] = tmp[tmpIdx];
      tmp[tmpIdx] = num;

      tmp.sort((a, b) => a - b);
      arr.concat(...tmp);
      flag = 1;
      console.log(arr);
      break;
    }
  }

  if (flag === 0) {
    cout << -1;
  } else {
  }
}

solution();
