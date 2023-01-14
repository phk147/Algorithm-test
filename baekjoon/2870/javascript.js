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

function solution() {

  let nums = [];
  for(let i=0;i<input.length;i++){
    let word = input[i].split("");
    let num ="";
    for(let j=0;j<word.length;j++){
      if(97<=word[j].charCodeAt()&&word[i].charCodeAt()<=122){
        if(num==="") continue;
        nums.push(num);
        num="";
      } else {
        num+=word[j];
      }
    }
    if(num!=="") nums.push(num);
  }

  let answer = nums.map(v=>{
    if(v[0]==="0"){
      v= v.split("").reduce((acc,cur)=>Number(acc)+Number(cur));
      return v;
    }
    return +v;
  }).sort((a,b)=>a-b);


  console.log(answer.map(BigInt).join("\n"));
}

solution();
