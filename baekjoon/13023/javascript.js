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

  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  input = input.map((v) => v.split(" ").map((val) => +val));

  // 친구 관계

  let friends = new Array(n + 1).fill().map((_) => []);

  for (let i = 0; i < m; i++) {
    let [x, y] = input[i];
    friends[x].push(y);
    friends[y].push(x);
  }

  let ans = 0;

  // 한명씩 친구관계 확인 -> 4확인?
  const dfs = (x, cnt, vis) => {
    vis[x] = 1;
    if (cnt === 4) {
      ans = 1;
      return;
    }
    if (!friends[x].length) return;

    for (let i = 0; i < friends[x].length; i++) {
      if (vis[friends[x][i]] === 0) {
        vis[friends[x][i]] = 1;
        dfs(friends[x][i], cnt + 1, vis);
        vis[friends[x][i]] = 0;
      }
    }
  };

  for (let i = 0; i < n; i++) {
    let vis = new Array(n + 1).fill(0);
    dfs(i, 0, vis);
    if (ans === 1) break;
  }

  console.log(ans);
}

solution();
