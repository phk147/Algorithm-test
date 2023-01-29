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

  let [n,m] = input.shift().split(" ").map(v=>+v);
  let graph = input.map(v=>v.split(" ").map(val=>+val));

  function Combination(arr, r) {
    const result = [];
    if (r === 1) return arr.map((num) => [num]);
    arr.forEach((fixed, index, org) => {
      const rest = org.slice(index+1);
      const combinations = Combination(rest, r - 1);
      const attached = combinations.map((numbers) => [fixed, ...numbers]);
      result.push(...attached);
    });
    return result;
  }

function solution() {
  // 최소 치킨 거리를 구해야한다.
  let min = 9999;
  // m개의 치킨집만 남기고 나머지는 폐업 -> m개의 치킨집을 고르는 방식을 해야함

  // 치킨집의 위치 => m개의 경우의 수
  let chicken = [];
  // 집의 위치 => 배열로 관리, 계산식
  let house = [];

  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      if(graph[i][j]===1) house.push([i,j]);
      if(graph[i][j]===2) chicken.push([i,j]);
    }
  }

  let comChicken = Combination(chicken,m);

  for(let i=0;i<comChicken.length;i++){
    let temp = comChicken[i];
    let houseDis = new Array(house.length).fill(9999);
    for(let j=0;j<temp.length;j++){
      let [cx,cy] = temp[j];

      for(let k=0;k<house.length;k++){
        houseDis[k] = Math.min(houseDis[k],Math.abs(house[k][0]-cx)+Math.abs(house[k][1]-cy));
      }
    }
    min = Math.min(min,houseDis.reduce((a,c)=>a+c));
  }

  console.log(min);

}

solution();
