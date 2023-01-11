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

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

const bfs = (graph,vis,x,y)=>{
  let queue = [];
  vis[x][y]=1;
  let cnt = 1;
  queue.push([x,y]);
  while(queue.length!==0){
    let [cx,cy]=queue.shift();
    for(let dir=0;dir<4;dir++){
      let nx = cx+dx[dir];
      let ny = cy+dy[dir];
      if(nx<0||nx>=graph.length||ny<0||ny>=graph[0].length) continue;
      if(graph[nx][ny]===1||vis[nx][ny]===1) continue;
      vis[nx][ny]=1;
      cnt++;
      queue.push([nx,ny]);
    }
  }
  return cnt;
}


function solution() {
  let [m,n,k] = input.shift().split(" ").map(v=>+v);
  let graph = new Array(m).fill().map(v=>new Array(n).fill(0));
  let vis = new Array(m).fill().map(v=>new Array(n).fill(0));
  let result =[];

  for(let i=0;i<k;i++){
    let [lx,ly,rx,ry] = input[i].split(" ").map(v=>+v);
    ly = m-ly;
    ry = m-ry;

    for(let y=ry;y<ly;y++){
      for(let x=lx;x<rx;x++){
        graph[y][x]=1;
      }
    }
  }
  for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
      if(graph[i][j]===0&&vis[i][j]===0){
        let cnt = bfs(graph,vis,i,j);
        result.push(cnt);
      }
    }
  }



  result.sort((a,b)=>a-b);
  console.log(result.length);
  console.log(result.join(" "));

}



solution();
