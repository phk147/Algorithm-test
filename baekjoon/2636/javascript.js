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

let [n,m] = input.shift().split(" ").map(v=>+v);

let graph = input.map(v=>v.split(" ").map(val=>+val));


let dx = [0,1,0,-1];
let dy = [1,0,-1,0];

const bfs=(x,y,vis)=>{
  let queue = [];
  vis[x][y]=1;
  let count = 0;
  queue.push([x,y]);
  while(queue.length){
    let [cx,cy] = queue.shift();
    for(let dir=0;dir<4;dir++){
      let nx = cx+dx[dir];
      let ny = cy+dy[dir];

      if(nx<0||nx>=n||ny<0||ny>=m) continue;
      if(graph[nx][ny]===1&&vis[nx][ny]===0) {
        graph[nx][ny]=0;
        vis[nx][ny]=1;
        count++;
        continue;
      }
      if(vis[nx][ny]===1) continue;
      vis[nx][ny]=1;
      queue.push([nx,ny]);
    }
  }

  return count;
}

function solution() {
  // 한시간마다 겉부분이 사라짐 => 개수를 기록

  let cnt = [];


while(cnt.at(-1)!==0){

  let vis = new Array(n).fill().map(v=>new Array(m).fill(0));
  
  let count = bfs(0,0,vis);


  cnt.push(count);

}

  console.log(cnt.length-1);
  console.log(cnt.at(-2));


}

solution();
