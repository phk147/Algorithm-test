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

let [n,l,r] = input.shift().split(" ").map(v=>+v);
let graph = input.map(v=>v.split(" ").map(val=>+val));

let dx = [0,1,0,-1];
let dy = [1,0,-1,0];
const bfs=(x,y,vis)=>{
  let queue = [];
  vis[x][y]=1;
  let open = [[x,y]];
  let psum = graph[x][y];
  queue.push([x,y]);
  while(queue.length){
    let [cx,cy] = queue.shift();
    for(dir=0;dir<4;dir++){
      let nx = cx+dx[dir];
      let ny = cy+dy[dir];
      if(nx<0||nx>=n||ny<0||ny>=n) continue;
      if(Math.abs(graph[cx][cy]-graph[nx][ny])<l||Math.abs(graph[cx][cy]-graph[nx][ny])>r||vis[nx][ny]===1) continue;
      vis[nx][ny]=1;
      queue.push([nx,ny]);
      open.push([nx,ny]);
      psum+=graph[nx][ny];
    }
  }
  // 연합의 인구수 / 칸의 개수
  open.forEach(v=>{
    let [ox,oy] = v;
    graph[ox][oy] = Math.floor(psum/open.length);
  })

  return open.length===1 ? 0 : 1;
}

function solution() {

  let ans =0;
  let flag = [];
  
  
  while(1){
    // 국경선을 공유하는 나라의 인구수 체크 -> 오픈할지 확인
    let check = new Array(n).fill().map(v=>new Array(n).fill(0));
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(check[i][j]===0) {
          flag.push(bfs(i,j,check));
        }
      }
    }
    
    if(!flag.filter(v=>v===1).length) break;
    
    flag=[];
    ans++;
    
  }

  console.log(ans);


}

solution();
