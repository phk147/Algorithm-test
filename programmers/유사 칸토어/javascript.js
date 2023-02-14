function solution() {
  let [n,l,r] = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split(" ")
    .map((val) => val.trim()).map(v=>+v);
  



    let bit = ["00000","11011"];

    let arr = ["1"];

    for(let i=1;i<=n;i++){
      // 이전 비트열을 꺼내서 하나씩 나눈다.
      let temp = arr[i-1].split("");

      // 하나씩 나눈 값을 치환한다.
      for(let j=0;j<temp.length;j++){
        if(temp[j]==='0') temp[j]=bit[0];
        else temp[j]=bit[1];
      }

      arr[i]=temp.join("");
    }

    let cnt = arr[n].split("").slice(l-1,r).filter(v=>v==='1').length;

    console.log(arr[n]);

    // 1 1/1/0/1/1 4/4/0/4/4 16/16/0/16/16 ...

    let four = Math.pow(4,n);
    let five = Math.pow(5,n);


    let left = [parseInt(l/5), parseInt(l%5)];
    let right = [parseInt(r/5), parseInt(r%5)];

    let a = (left[0]<3 ? left[0] : left[0]-1)*four/4 + (left[1]<3 ? left[1] : left[1]-1)*4;
    let b = (right[0]<3 ? right[0] : right[0]-1)*four/4 + (right[1]<3 ? right[1] : right[1]-1)*4;
    


console.log(b-a);


}

solution();
