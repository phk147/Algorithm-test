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

  for (let i = 0; i < n; i++) {
    let temp = input.shift();
    dna.push(temp);
  }

  dna.sort((a, b) => (a > b) - (a < b));

  dna.forEach((v) => {
    let psum = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (v[j] !== dna[i][j]) {
          psum += 1;
          console.log(i, j, psum);
        }
      }
    }
    answer.push([v, psum]);
  });

  console.log(answer);
}

solution(input);
