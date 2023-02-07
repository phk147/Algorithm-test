/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let t = +input.shift();
  input = input.map((v) => v.split(" "));
  let s = [];
  let ans = [];
  while (t--) {
    let temp = input.shift();

    let oper = +temp[0];
    let ops = temp.length === 2 ? temp[1] : "";

    if (oper === 1) {
      ops.split("").forEach((v) => {
        s.push(v);
      });
      ans.push([...s]);
    } else if (oper === 2) {
      for (let i = 1; i <= +ops; i++) {
        s.pop();
      }
      ans.push([...s]);
    } else if (oper === 3) {
      console.log(s[+ops - 1]);
    } else {
      ans.pop();
      s = ans.length ? [...ans.at(-1)] : [];
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
