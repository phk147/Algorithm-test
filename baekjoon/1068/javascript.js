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

let n = +input.shift();
let node = input
  .shift()
  .split(" ")
  .map((v) => +v);
let remove = +input.shift();

let rootNode;
let tree = [];

node.forEach((v, i) => {
  if (v === -1) {
    rootNode = i;
    return;
  }
  if (!tree[v]) tree[v] = [];
  tree[v].push(i);
});

let cnt = 0;
// dfs => 리프노드 수를 구하는 것
const dfs = (root) => {
  if (!tree[root]) {
    cnt++;
    return;
  }
  tree[root].forEach((node) => {
    if (node === remove) {
      if (tree[root].length === 1) cnt++;
      return;
    }
    dfs(node);
  });
};
if (remove === rootNode) {
  console.log(0);
  return;
}
dfs(rootNode);

console.log(cnt);
