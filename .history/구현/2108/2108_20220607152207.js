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

  let [n, ...arr] = input.map((val) => +val);

  arr.sort((a, b) => b - a);

  //mean
  let psum = arr.reduce((a, c) => a + c);
  let mean = Math.round(psum / n);

  //middle
  let middle = arr[parseInt(arr.length / 2)];

  //mode
  let cnt = Array.from({ length: 8001 }, () => 0);
  let most = -9999;
  arr.forEach((val) => {
    cnt[val + 4000]++;
  });

  for(let i=0;i<8001;i++){
    if(cnt[i]===0){
      continue;
    }
    if()
  }


  console.log(mean, middle, cnt);
}

solution();
