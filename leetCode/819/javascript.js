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
  let paragraph = input.shift();
  let banned = [input.shift()];
  let pattern = /[^\w\s]/gi;
  paragraph = paragraph
    .replace(pattern, " ")
    .toLowerCase()
    .split(" ")
    .filter((v) => v !== "");

  for (let i = 0; i < banned.length; i++) {
    paragraph = paragraph.filter((v) => v !== banned[i]);
  }

  let counts = {};

  for (let i = 0; i < paragraph.length; i++) {
    if (counts[paragraph[i]]) {
      counts[paragraph[i]]++;
    } else {
      counts[paragraph[i]] = 1;
    }
  }

  counts = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  console.log(counts[0][0]);
}

solution();
