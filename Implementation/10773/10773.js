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

    
    let [k,...arr] = input;


    let stk = [];
    arr.forEach(val=>{
      if(val !== "0"){
        stk.push(val);
      } else {
        stk.pop();
      }
    })
    
    let ret=0;
    if(stk.length !== 0){
      ret = stk.reduce((acc,cnt)=> Number(acc)+Number(cnt));

    }

    console.log(ret);

}

solution();
