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
  let [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let [r, c, d] = input
    .shift()
    .split(" ")
    .map((v) => +v);

    let robot = [r,c,d];

  let map = [];
  for (let i = 0; i < n; i++) {
    map.push(
      input
        .shift()
        .split(" ")
        .map((v) => +v)
    );
  }
  let cnt = 0;
  let rot = 0;
  let finish = false;
  while(1) {
    if(rot===4&&finish) break;

    let x = robot[0];
    let y = robot[1];
    let D = robot[2];

    //현재 위치 청소
    cnt++;
    //인접칸 탐색 1. 왼쪽 체크
    switch (D){
      case 0:
        if(map[x][y-1] === 0){
          robot[1]=map[x][y-1];
          robot[2]=3;
        } else {
          robot[]
        }
        break;
    }
  }

  console.log(n, m, r, c, d, map);
}

solution(input);
