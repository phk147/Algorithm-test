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
  let [T,...Array] = input;
  Array = Array[0].split(" ").map((v)=>+v);
  const permutations = getPermutations(Array,T)

let max = -99999;
permutations.forEach((v)=>{
  let temp =0;
  for(let i =0;i<=T-2;i++){
    temp += Math.abs(v[i]-v[i+1]);
    if(i===T-2&&temp>max)max=temp;
  }
})

  console.log(max);
  
}
// 순열
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
    // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); 
    // 나머지에 대해서 순열을 구한다.
    const attached = permutations.map((el) => [fixed, ...el]); 
    //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); 
    // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
}




solution(input);
