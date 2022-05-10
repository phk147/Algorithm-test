/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs").readFileSync("예제.txt").toString().trim().split("\n");

  let testNum = input[0];

  let stack = [];
  let answer = [];
  input.forEach((val) => {
    let temp = val.split(" ");
    if (temp[0] === "push") {
      stack.push(temp[1]);
    } else if (temp[0] === "pop\r") {
      answer.push(stack.pop());
    } else if (temp[0] === "size\r") {
      answer.push(stack.length);
    } else if (temp[0] === "empty\r") {
      answer.push(stack[0] ? 0 : 1);
    } else if (temp[0] === "top\r") {
      answer.push(stack[stack.length - 1] || -1);
      console.log(stack[stack.length - 1]);
    }
  });

  console.log(input);

  return answer;
}

solution();

// const array = require("fs").readFileSync("예제.txt").toString().split("\n");

// const stack = [];
// const result = [];

// const len = array.shift();

// for (let i = 0; i < len; i++) {
//   switch (array[i]) {
//     case "pop":
//       result.push(stack.pop() || -1);
//       break;

//     case "size":
//       result.push(stack.length);
//       break;

//     case "empty":
//       result.push(stack[0] ? 0 : 1);
//       break;

//     case "top":
//       result.push(stack[stack.length - 1] || -1);
//       break;

//     default:
//       stack.push(array[i].split(" ")[1]);
//       break;
//   }
// }

// console.log(result.join("\n"));
// console.log(result);
