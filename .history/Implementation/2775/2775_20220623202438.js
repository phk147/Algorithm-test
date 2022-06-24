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
  let t = +input.shift();
  
  while(t--){
    let k = +input.shift();
    let n = +input.shift();

    let arr = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14]];

    for(let i=1;i<=k;i++){
      for(let j=1;j<=n;j++){
        let temp = arr[i-1]+
      }
    }
  }


}

solution(input);
