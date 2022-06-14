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

  //숫자 1 2초 => 1++
  // abc:1 def:2 ghi:3 jkl 5 ... 
  let arr = input.join("").split("");


  let cnt = 0;
  arr.forEach((val)=>{
    switch(val){
      case "A":case"B":case"C":
        cnt +=3;
        break;
      case 'D':case"E":case"F":
        cnt +=4;
        break;
      case 'G':case"H":case"I":
        cnt +=5;
        break;
      case 'J':case"K":case"L":
        cnt +=6;
        break;
      case 'M':case"N":case"O":
        cnt +=7;
        break;
      case 'P':case"Q":case"R":case"S":
        cnt +=8;
        break;
      case 'T':case"U":case"V":
        cnt +=9;
        break;
      case 'W':case"X":case"Y":case"Z":
        cnt +=10;
        break;
      default:
        cnt+=11;
        break;
    }

  })
  
  console.log(cnt);

}

solution();
