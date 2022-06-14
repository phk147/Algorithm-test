/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let [n,...arr] = input;

  let cnt = n;
  while(0<n){
    let temp = arr[n-1].split("");
    let len = temp.length;
    for(let i=0;i<len;i++){
      if(temp[i] === temp[i+1]){
        continue;
      } else {
        if(temp.includes(temp[i],i+1)){
          cnt--
          break;
        }
      }
    }
    n--;
  }

  console.log(cnt);
}

solution();
