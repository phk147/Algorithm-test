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

class Queue{
  constructor() {
    this.arr = [];
    this.head = 0;
    this.tail = 0;
  }

  push(data){
    this.arr[this.tail++] = data;
  }
  pop(){
    return this.arr[this.head++];
  }
  size(){
    return this.tail-this.head;
  }
  
}

let [n, k] = input[0].split(" ").map((v) => +v);
function solution() {

  if(n==0&&k==0) {cout<<0<<"\n"; return 0;}
  fill(visited,visited+200002,-1);
  
  queue<int> q;
  q.push(n);
  visited[n]=0;

  while(visited[k]==-1){
    int cur = q.front();
    q.pop();
    for(int dir=0;dir<3;dir++){
      int dx;
      if(dir==2){
        dx = cur * dn[dir];
      } else{
        dx = cur + dn[dir];
      }

      if(dx<0||dx>100000) continue;
      if(visited[dx]>=0) continue;
      visited[dx] = visited[cur]+1;
      q.push(dx);
    }
  }

  cout<<visited[k]<<"\n";

}

solution();
