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
    .map((val) => val.trim()).join("");

    
    let arr = ["c=","c-","dz=","d-","lj","nj","s=","z="];

    arr.forEach((val)=>{
      input = input.replaceAll(val,"A");
    })




    console.log(input.length);

    


}

solution();
