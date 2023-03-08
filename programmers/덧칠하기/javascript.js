function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let section = input
    .shift()
    .split(" ")
    .map((v) => +v);

  console.log(n, m, section);

  // 페인트가 칠해진 길이가 n
  // 왼쪽부터 1~n까지 번호
  // 룰러의 길이 m

  // 규칙1 룰러가 벽에서 벗어나면 안된다.
  // 규칙2 구역의 일부분만 포함되도록 칠하면 안된다.

  // 룰러를 사용하는 횟수를 최소화

  // 우선 앞부분부터 발견하면 진행
  // i+룰러의 길이를 통해 확인
  let ans = 0;

  while (section.length) {
    console.log(section);
    let temp = section.shift();
    for (let i = 0; i < m; i++) {
      let idx = section.indexOf(temp + i);
      if (idx !== -1) {
        console.log(idx);
        section.splice(idx, 1);
      }
    }
    ans++;
  }

  console.log(ans);
}

solution();
