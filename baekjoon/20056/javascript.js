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
    .split("\n");

  let [n, num, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let fireBall = input.map((v) => v.split(" ").map((val) => +val));

  for (let i = 0; i < fireBall.length; i++) {
    fireBall[i][0]--;
    fireBall[i][1]--;
  }

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  while (k--) {
    let vis = new Array(n).fill().map((_) => new Array(n).fill(0));
    let check = [];
    for (let i = 0; i < fireBall.length; i++) {
      let [r, c, m, s, d] = fireBall[i];
      let nx = (r + dx[d] * s) % n;
      let ny = (c + dy[d] * s) % n;
      if (nx < 0) nx += n;
      if (ny < 0) ny += n;

      fireBall[i] = [nx, ny, m, s, d];
      if (vis[nx][ny] === 0) vis[nx][ny] = [i];
      else {
        if (check.findIndex((v) => v[0] === nx && v[1] === ny) === -1) check.push([nx, ny]);
        vis[nx][ny].push(i);
      }
    }
    let idxArr = [];
    while (check.length) {
      let [x, y] = check.pop();
      let temp = vis[x][y];
      let pm = 0;
      let ps = 0;
      let dCheck = fireBall[temp[0]][4] % 2;
      let flag = 1;
      for (let i = 0; i < temp.length; i++) {
        let idx = temp[i];
        idxArr.push(idx);
        pm += fireBall[idx][2];
        ps += fireBall[idx][3];
        if (fireBall[idx][4] % 2 !== dCheck) flag = 0;
      }

      if (parseInt(pm / 5) !== 0) {
        if (flag) {
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 0]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 2]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 4]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 6]);
        } else {
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 1]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 3]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 5]);
          fireBall.push([x, y, parseInt(pm / 5), parseInt(ps / temp.length), 7]);
        }
      }
    }
    idxArr.sort((a, b) => b - a);
    for (let i = 0; i < idxArr.length; i++) {
      fireBall.splice(idxArr[i], 1);
    }
  }
  let ans = 0;
  for (let i = 0; i < fireBall.length; i++) {
    ans += fireBall[i][2];
  }
  console.log(ans);
}

solution();
