/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

const calc = (oper, a, b) => {
  if (oper === "+") return a + b;
  if (oper === "-") return a - b;
  if (oper === "*") return a * b;
};

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());
  let n = +input.shift();
  let arr = input.shift().split("");

  // 최대값
  let ans = -999999999999;

  // 연산자는 +,-,*

  // 괄호...흠...?
  let num = [];
  let oper = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) num.push(arr[i]);
    else oper.push(arr[i]);
  }
  num = num.map((v) => +v);

  console.log(num, oper);

  const check = (here, number) => {
    console.log(here, number);
    if (here === num.length - 1) {
      ans = Math.max(ans, number);
      return;
    }

    check(here + 1, calc(oper[here], number, num[here + 1]));
    if (here + 2 <= num.length - 1) {
      let temp = calc(oper[here + 1], num[here + 1], num[here + 2]);
      check(here + 2, calc(oper[here], number, temp));
    }
  };

  check(0, num[0]);

  console.log(ans);
}

solution();
