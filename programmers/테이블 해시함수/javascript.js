function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [col, row_begin,row_end] = input.shift().split(" ").map(v=>+v);

  let data = input.map(v=>v.split(" ").map(val=>+val));



  // col을 기준으로 정렬 -> 같으면 첫번째값을 기준으로 정렬
  data.sort((a,b)=>{
    if(a[col-1]===b[col-1]) return b[0]-a[0];
    return a[col-1] - b[col-1];
  })

  // s_i 값 누적할까? 아님 배열에 정리?

  let ans;

  for(let i=row_begin-1;i<row_end;i++){
    let temp = data[i];
    let psum =0;
    for(let j=0;j<temp.length;j++){
      psum += temp[j]%(i+1);
    }
    if(ans===undefined) ans = psum;
    else ans = ans ^ psum;
  }
  console.log(ans);

}

solution();
