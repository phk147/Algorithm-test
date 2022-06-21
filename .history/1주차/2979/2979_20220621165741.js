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
    .map((v) => v.trim());

  let [a, b, c] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let truck_a = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let truck_b = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let truck_c = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let arr_a = [];
  let arr_b = [];
  let arr_c = [];

  for (let i = truck_a[0]; i < truck_a[1]; i++) {
    arr_a.push(i);
  }
  for (let i = truck_b[0]; i < truck_b[1]; i++) {
    arr_b.push(i);
  }
  for (let i = truck_c[0]; i < truck_c[1]; i++) {
    arr_c.push(i);
  }
  let answer = 0;

  for (let i = 1; i <= 100; i++) {
    let cnt = 0;
    if (arr_a.includes(i)) cnt++;
    if (arr_b.includes(i)) cnt++;
    if (arr_c.includes(i)) cnt++;

    if (cnt === 3) {
      answer += c * cnt;
    } else if (cnt === 1) {
      answer += a;
    } else if (cnt === 2) {
      answer += b * cnt;
    } else {
      continue;
    }
  }

  console.log(answer);
}

solution();
