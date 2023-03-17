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
    .split("\n")
    .map((val) => val.trim());

  let [n, num, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let fireBall = input.map((v) => v.split(" ").map((val) => +val));

  let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  let dy = [0, 1, 1, 1, 0, -1, -1, -1];

  // d 방향으로 s만큼 이동한다.
  // 이동하는 동안 같은 칸에 여러개의 파이어볼이 있을 수 있다.
  while (k--) {
    console.log(fireBall);
    // 파이어볼 이동 구현
    let vis = new Array(n).fill().map((_) => new Array(n).fill(0));
    let check = [];
    for (let i = 0; i < fireBall.length; i++) {
      let [r, c, m, s, d] = fireBall[i];
      let nr = r + dx[d];
      let nc = c + dy[d];
      if (nr < 0 || nr >= n || nc < 0 || nc >= n) {
        fireBall.splice(i, 1);
        continue;
      }

      fireBall[i] = [nr, nc, m, s, d];
      if (vis[nr][nc] === 0) {
        vis[nr][nc] = [i];
      } else {
        vis[nr][nc].push(i);
        check.push([nr, nc]);
      }
    }

    // 같은 칸에 2개 이상의 파이어볼이 있는지 검사
    for (let i = 0; i < check.length; i++) {
      let [x, y] = check[i];
      let arr = vis[x][y];
      let r = arr[0][0];
      let c = arr[0][1];
      let pm = 0;
      let ps = 0;
      let flag = 1;
      let check = arr[0][4] % 2;
      for (let i = 0; i < arr.length; i++) {
        pm += arr[i][2];
        ps += arr[i][3];
        if (arr[i][4] % 2 !== check) flag = 0;
      }

      if (parseInt(pm / 5) === 0) continue;

      if (flag) {
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 0]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 2]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 4]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 6]);
      } else {
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 1]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 3]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 5]);
        fireBall.push([r, c, parseInt(pm / 5), parseInt(ps / arr.length), 7]);
      }
    }

    console.log("Fire", fireBall);
  }

  // 이동이 모두 끝난 후 2개 이상의 파이어볼이 있는 칸에서는 아래와 같이 진행된다.
  // 1. 같은 칸에 있는 파이어볼은 모두 하나로 합쳐진다.
  // 2. 4개로 나눠진다.
  // 질량 : 합쳐진 질량/5
  // 속력 : 합쳐진 속력/개수
  // 방향이 모두 홀수,짝수 0,2,4,6 아니면 1,3,5,7
  // 질량이 0인 파이어볼은 소멸
}

solution();
