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

  let [n, ...arr] = input.map((val) => +val);

  arr.sort((a, b) => a - b);

  let ret = [];

  //mean
  let psum = arr.reduce((a, c) => a + c);
  let mean = Math.round(psum / n);

  //middle
  let middle = arr[parseInt(arr.length / 2)];

  //mode
  let cnt = Array.from({ length: 8001 }, () => 0);
  let most = -9999;
  let non_first = false;
  let mode = 0;
  arr.forEach((val) => {
    cnt[val + 4000]++;
  });

  for (let i = 0; i < 8001; i++) {
    if (cnt[i] === 0) {
      continue;
    }
    if (cnt[i] == most) {
      if (non_first) {
        mode = i - 4000;
        non_first = false;
      }
    }
    if (cnt[i] > most) {
      most = cnt[i];
      mode = i - 4000;
      non_first = true;
    }
  }

  //area
  let area = arr[arr.length - 1] - arr[0];

  console.log(mean, middle, mode, area);
}

solution();
