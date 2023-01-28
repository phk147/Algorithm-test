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

let nums = input.shift().split(" ").map(v=>+v);

function solution() {

  let ans = [];
  let stk = [];

  for(let i=n-1;i>=0;i--){
    
    if(!stk.length) {
      stk.push(nums[i]);
      ans.push(-1);
      continue;
    }
    while (stk.at(-1) <= nums[i]) {
      stk.pop();
    }
    if (!stk.length) {
      ans.push(-1);
      stk.push(nums[i]);
    } else {
      ans.push(stk.at(-1));
      stk.push(nums[i]);
    }
    }
  
  console.log(ans.reverse().join(" "));
}

solution();
