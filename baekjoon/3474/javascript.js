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


  let t = +input.shift();
  input = input.map(v=>+v);

function solution() {


  while(t--){
    let n = input.shift();

    let five = 0;


    for(let i=5;i<=n;i*=5){
      five+=Math.floor(n/i);
    }

    console.log(five);
   
  }

  
}

solution();
