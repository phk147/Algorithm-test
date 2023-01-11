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

 
 let n = +input.shift();
 let graph = input.map(v=>v.split(" ").map(val=>+val));
 
 let dx = [1, 0, -1, 0];
 let dy = [0, 1, 0, -1];

 const bfs=(x,y,vis,high)=>{
  let queue = [];
  vis[x][y]=1;
  queue.push([x,y]);
  while(queue.length!==0){
    let [cx,cy] = queue.shift();
    for(let dir=0;dir<4;dir++){
      let nx = cx+dx[dir];
      let ny = cy+dy[dir];
      if(nx<0||nx>=n||ny<0||ny>=n)continue;
      if(graph[nx][ny]<=high||vis[nx][ny]===1)continue;
      vis[nx][ny]=1;
      queue.push([nx,ny]);
    }
  }
 }

 const dfs = (x,y,vis,high) =>{
  vis[x][y]=1;
  for(let dir=0;dir<4;dir++){
    let nx = x+dx[dir];
    let ny = y+dy[dir];
    if(nx<0||nx>=n||ny<0||ny>=n)continue;
    if(graph[nx][ny]<=high||vis[nx][ny]===1)continue;
    dfs(nx,ny,vis,high);
  }
 }

 
 function solution() {

  let result =1;

  for(let h=1;h<=100;h++){
    let vis = new Array(n).fill().map(v=>new Array(n).fill(0));
    
    let cnt=0;

    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        if(graph[i][j]>h&&vis[i][j]===0){
          dfs(i,j,vis,h);
          cnt++;
        }
      }
    }
    if(cnt>result) result=cnt;
  }
  console.log(result);
 }
 
 solution();