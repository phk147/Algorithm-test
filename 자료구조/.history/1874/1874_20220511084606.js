/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("예제.txt")
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

  let testNum = input.shift();
  let stack = [];
  let answer = [];
  input.forEach((num) => {
    if(stack.length === 0){
      for(let n=1;n<=num;n++){
        stack.push(i);
          answer.push("+");
          if (i === num) {
            answer.push("+");
            answer.push("-");
      }
    } else {

      if (stack.indexOf(num) === -1) {
        console.log(stack[stack.length - 1]);
        for (let i = stack[stack.length - 1]; i <= num; i++) {
          stack.push(i);
          answer.push("+");
          if (i === num) {
            answer.push("+");
            answer.push("-");
          }
        }
      } else if (stack.indexOf(num) === num - 1) {
        stack.pop();
        answer.push("-");
      } else {
        for (let j = stack.length - 1; j >= stack.indexOf(num); j--) {
          stack.pop();
          answer.push("-");
        }
      }
    }

  });

  console.log(answer);
}

solution();

//[4,3,6,8,7,5,2,1]
