function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let storey = input.shift()
  storey = storey.toString().split("").map(v=>+v);

  // -1, +1 -10, +10, -100,+100

  // 내가 있는 층 -> 0이되는 최소값!
  // 1,10,100,1000,10000 .... 100000000
  // 어디와 가까운지 확인해야함-> 자리수?



  // 각 자리수 별로 가까운 거리를 확인?
  let cnt =0;

  while(storey.length){
    let num = storey.pop();
    if(num<=4) {
      cnt+=num;
    } else if (num>=6) {
      cnt+= 10 - num;
      if(storey.length) storey[storey.length-1]+=1;
      else storey.unshift(1);
    } else {
      if(storey.length && storey[storey.length-1]>=5){
        storey[storey.length-1]+=1;
      }
      cnt+=num;
    }
  }

  console.log(cnt);



}

solution();
