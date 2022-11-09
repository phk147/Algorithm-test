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
  input = input.map((v)=>v.split(" ").map(v=>+v));
  const t = input.shift()[0];
  // 팀분배
  let ans = 99999;
  let numArr = [];
  for(let i=1;i<=t;i++){
    numArr.push(i);
  }
  
  let combinations = getCombinations(numArr,t/2);
  
  combinations.forEach((v)=>{
    let oppnent = [];
    for(let i=1;i<=t;i++){
      if(!v.includes(i)){
        oppnent.push(i);
      }
    }

    let sumV =0;
    let sumO =0;
    for(let i=0;i<t/2-1;i++){
      for(let j=i+1;j<t/2;j++){
        sumV+=input[v[i]-1][v[j]-1]+input[v[j]-1][v[i]-1];
        sumO+=input[oppnent[i]-1][oppnent[j]-1]+input[oppnent[j]-1][oppnent[i]-1];
      }
    }

    let temp =Math.abs(sumV-sumO);
    if(temp<ans) ans = temp;


  })
  console.log(ans);

}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); 
    // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((el) => [fixed, ...el]); 
    //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}

solution(input);
