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
let graph = input.map(v=>v.split("").map(v=>+v));

const quard = (y,x,size)=>{
  if(size===1) return graph[y][x];
  let temp = graph[y][x];
  let result = "";
  for(let i=y;i<y+size;i++){
    for(let j=x;j<x+size;j++){
      if(temp!==graph[i][j]){
        result+="(";
        result+=quard(y,x,size/2);
        result+=quard(y,x+size/2,size/2);
        result+=quard(y+size/2,x,size/2);
        result+=quard(y+size/2,x+size/2,size/2);
        result+=")";
        return result;
      }
    }
  }
  return graph[y][x];

}

function solution() {
  console.log(quard(0,0,n));
}

solution();
