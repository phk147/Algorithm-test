function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [n,k] = input.shift().split(" ").map(v=>+v);
  let enemy = input.shift().split(" ").map(v=>+v);


  // n ->life k->pass

  let answer = 0;

  if(k>=enemy.length) return enemy.length;

  let psum = 0;
  let pass = new Array(k).fill(-1);

  for(let i=0;i<enemy.length;i++){
    let numE = enemy[i];

    if(psum+numE <=n){
      psum+=numE;
      answer++;

      // 큰 수를 저장해둔다
    } else {
     
      console.log("!",i);
      pass.sort((a,b)=>a-b);
      while(numE+psum > n&&pass.length){
        let temp = pass.pop();
        if(temp === -1) {answer++; break;}
        psum-=temp;
        answer++;
      }
      
      if(!pass.length&&numE+psum >n) break;
      
      psum+=numE;
      

    }

    if(pass.length){

      for(let j=0;j<pass.length;j++){
        if(pass[j]<numE) {pass[j]=numE; break;}
      }
    }

    console.log("-----------------")
    console.log("i",i);
    console.log("answer",answer);
    console.log("numE",numE);
    console.log("psum",psum);
    console.log("pass",pass);
    console.log("-----------------")

    
  }

  console.log(answer);
}

solution();
