function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let elements = input
    .shift()
    .split(" ")
    .map((v) => +v);

  // 원형 수열 -> 처음과 끝이 연결된 수열
  // 연속 부분 수열 합으로 만들수 있는 수의 개수?
  let answer = [];

  let len = elements.length;

  // 길이가 1~len까지

  while (len > 0) {
    if (elements.length === len) {
      answer.push(elements.reduce((acc, cur) => acc + cur));
      len--;
      continue;
    }

    let cnt = len;

    for (let i = 0; i < elements.length; i++) {
      let temp = 0;
      for (let j = 0; j < cnt; j++) {
        if (i + j < elements.length) {
          temp += elements[i + j];
        } else {
          temp += elements[i + j - elements.length];
        }
      }
      answer.push(temp);
    }

    len--;
  }

  let ans = [...new Set(answer)];
  console.log(ans.length);
}

solution();
