/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = Number(require("fs").readFileSync("예제.txt").toString().trim());
  let card = [];
  let floor = [];

  for (let i = input; i > 0; i--) card.push(i);
  let count = 1;
  while (count < input) {
    floor.push(card.pop());
    let temp = card.pop();
    card.unshift(temp);
    console.log(card);

    count++;
  }

  console.log(card[0]);
}

solution();

//6장의 카드
// 카드 [6,5,4,3,2,1]
// 바닥 [1]
// 카드 [2,6,5,4,3]
