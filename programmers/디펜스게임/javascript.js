function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [n,k] = input.shift().split(" ").map(v=>+v);
  let enemy = input.shift().split(" ").map(v=>+v);


  // n ->life k->pass


  let count=0;

  if(k>enemy.length) return enemy.length;
  
  let max = new Array(k).fill(-1);
  let psum = [];
  let cur=0;

  for(let i=0;i<enemy.length;i++){
    let num = enemy[i];

    console.log("count",count);
    console.log("cur",cur);
    console.log("num",num);

    
    if(n>=cur+num){
      cur+=num;
      for(let j=0;j<max.length;j++){
        if(max[j]<num) {
          max[j]=num;
          break;
        }
      }
    } else {
      // 적의 합계가 넘어감 -> 무적권 사용 타이밍
      max.sort((a,b)=>a-b);
      while(max.length){
        if(cur+num<=n) break;
        let addLife = max.pop();
        if(num>cur - addLife && max[0]===-1) {max[0]=addLife};
        cur -= addLife;
      }

      console.log(count,cur);

      if(n>=cur+num){
        cur+=num;
      }
    }

    count++;

  }

  console.log(count);
}

solution();
