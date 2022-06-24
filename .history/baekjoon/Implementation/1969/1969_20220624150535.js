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
function solution(input) {
  //input
  let [n, m] = input.shift().split(" ");
  let dna = [];
  let answer = [];
  let psum = 0;
  let D = ["A", "C", "G", "T"];

  for (let i = 0; i < n; i++) {
    let temp = input.shift();
    dna.push(temp);
  }

  for (let i = 0; i < m; i++) {
    let ACGT = [0, 0, 0, 0];
    for (let j = 0; j < n; j++) {
      if (dna[j][i] === "A") ACGT[0]++;
      else if (dna[j][i] === "C") ACGT[1]++;
      else if (dna[j][i] === "G") ACGT[2]++;
      else ACGT[3]++;
    }
    let max = -9999;
    idx = 0;
    for (let a = 0; a < 4; a++) {
      if (ACGT[a] > max) {
        max = ACGT[a];
        idx = a;
      }
    }
    answer.push(D[idx]);
    psum += max;

    console.log(D[idx], max);
  }

  console.log(answer.join(""));
  console.log(psum);
}

solution(input);
