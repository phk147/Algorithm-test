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

  let [h,w]= input.shift().split(" ").map(v=>+v);
  
  let graph = input.map(v=>v.split(""));
  
  
  
  let answer = new Array(h).fill().map(v=>new Array(w).fill(-1));
  
  const dfs = (x,y)=>{
    answer[x][y]=0;
    count=1;
    while(1){
      let ny = y+count;
      if(ny>=w||graph[x][ny]==='c'||answer[x][ny]!==-1) return;
      answer[x][ny]=count;
      count++;
    } 
  }
  
  function solution() {
  // 구름은 1분 마다 오른쪽으로 이동 => 몇분이 걸리는지 표시, 방문하지 않으면 -1
  // 완전 탐색 => c가 발견되면 오른쪽으로만 이동시킨다.
  // answer에 기록

  for(let i=0;i<h;i++){
    for(let j=0;j<w;j++){
      if(graph[i][j]==='c'){
        dfs(i,j);
      }
    }
  }




  answer.map(v=>v.join(" ")).forEach(val=>console.log(val))
}

solution();
