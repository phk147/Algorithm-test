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
  const [n, m] = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let maxNum = 0;
  const answer = [];
  const graph = [];
  for (let i = 0; i < n; i++) {
    graph.push(
      input
        .shift()
        .split(" ")
        .map((v) => +v)
    );
  }
  // 최대값 찾기
  graph.forEach((v) => {
    for (let i = 0; i < v.length; i++) {
      maxNum = Math.max(maxNum, v[i]);
    }
  });

  // 상하좌우 비교해서 최대값쪽으로 진행
  let cnt = 0;
  for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
      if(graph[i][j]===maxNum){

      }
    }
  }
  // cnt 4 종료 //answer.push
  // max값
}

let dx =[1,0,-1,0];
let dy =[0,1,0,-1];

//상하좌우값 비교
function checkNum(graph,i,j){
  let check = [];

  let psum =0;

  while(cnt!==4){
    let max = 0;
    for(let dir=0;dir<4;dir++){
      let nx = i+dx[dir];
      let ny = j+dy[dir];
      if(nx<0||nx>n||ny<0||ny>m) continue;
      check.push(graph[nx][ny]);
    }
  
    psum += Math.max(...check);
    cnt++;

    i=
  }

}

solution(input);


