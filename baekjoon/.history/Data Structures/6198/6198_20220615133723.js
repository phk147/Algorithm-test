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

  let n = +input[0];
  let cnt = 0;
  let tower = [];
  for (let i = 1; i <= n; i++) {
    let h = +input[i];

    while (tower.length != 0 && tower[tower.length - 1] <= h) {
      tower.pop();
    }
    cnt += tower.length;
    tower.push(h);
  }

  console.log(cnt);
}

solution();
