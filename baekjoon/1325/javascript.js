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

let [n, m] = input
  .shift()
  .split(" ")
  .map((v) => +v);

input = input.map((v) => v.split(" ").map((val) => +val));

function solution() {
  let tree = {};
  input.forEach((v) => {
    let [from, to] = v;
    tree[to] ? tree[to].push(from) : (tree[to] = [from]);
  });

  let cnt = 0;
  let max = -1;
  let answer = [];
  const dfs = (node, vis) => {
    vis[node] = 1;
    cnt++;

    if (tree[node]) {
      for (let i = 0; i < tree[node].length; i++) {
        if (!vis[tree[node][i]]) {
          dfs(tree[node][i], vis);
        }
      }
    }
  };

  for (let i = 1; i <= n; i++) {
    let vis = new Array(n + 1).fill(0);
    cnt = 0;

    dfs(i, vis);

    if (cnt > max) {
      ans = [i];
      max = cnt;
    } else if (cnt === max) {
      ans.push(i);
    }
  }

  console.log(ans.sort((a, b) => a - b).join(" "));
}

solution();
