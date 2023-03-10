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

  let n = +input.shift();
  let a = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let operator = input
    .shift()
    .split(" ")
    .map((v) => +v);

  const cal = (idx, a, b) => {
    if (idx === 0) return a + b;
    else if (idx === 1) return a - b;
    else if (idx === 2) return a * b;
    else return parseInt(a / b);
  };

  let oper = [];

  // dfs?
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  const dfs = (cnt) => {
    if (cnt === n - 1) {
      let num = a[0];
      for (let i = 0; i < oper.length; i++) {
        num = cal(oper[i], num, a[i + 1]);
      }
      if (num > max) max = num;
      if (num < min) min = num;
    }

    for (let i = 0; i < 4; i++) {
      if (!operator[i]) continue;
      operator[i]--;
      oper.push(i);
      dfs(cnt + 1);
      operator[i]++;
      oper.pop();
    }
  };

  dfs(0);
  console.log([max, min].join("\n"));
}

solution();
