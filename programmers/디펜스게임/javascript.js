function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [n, k] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let enemy = input
    .shift()
    .split(" ")
    .map((v) => +v);

  // n ->life k->pass

  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    // 해당 탐색에서 사용될 길이 내림차 순(k 소진을 위함)
    const curSlice = enemy.slice(0, mid).sort((a, b) => b - a);
    let noDie = k;
    // 전쟁 후 남을 상대 병사의 수
    const curEnemy = curSlice.reduce((acc, cur) => {
      // 무적권이 있다면
      if (noDie > 0) {
        noDie--;
        return acc;
      }
      return acc + cur;
    }, 0);
    // 상대 병사를 무적권 한도 내에 모두 무찌를 수 있는가?
    if (n - curEnemy >= 0 && noDie >= 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  console.log(left - 1);
  return left - 1;
}

solution();
