function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim())
    .map((v) => +v);

  let weights = input;
  weights.sort((a,b)=>a-b);
  // 2,3,4 에 자리가 있음
  // 하나의 값에서 비율을 전부 검사?

  // 1:1,2:3,2:4,3:4

  let cal = [3/2,2,4/3];

  let store ={};
  let ans =0;

  for(let i=0;i<weights.length;i++){
    if(!store[weights[i]]) store[weights[i]]=1;
    else store[weights[i]]++;
  }




  for(let num of keys){

    if(store[num]>=1) ans+= parseInt(store[num]*(store[num]-1)/2);


    for(let j=0;j<cal.length;j++){
      let temp = +num*cal[j];
      if(store[temp]!==undefined) {
        ans+=store[temp]*store[num];
      }
    }
  }
 
  console.log(ans);

}


solution();
