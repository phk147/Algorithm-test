/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */
let input = require("fs")
  .readFileSync("input.txt") //"/dev/stdin"
  .toString()
  .split("\n")
  .map((val) => val.trim());

function solution() {
  // 농구는 48분간 진행
  // 각 팀이 몇분간 이기고 있었는지 표시

  let t = +input.shift();

  let aScore = 0;
  let bScore = 0;
  let aTime = 0;
  let bTime = 0;
  let cur = 0;
  let team1 = [0,0];
  let team2 = [0,0];


  while(t--){
      let temp = input.shift().split(" ");

      let team = +temp.shift();
      let [m,s] = temp.shift().split(":").map(v=>+v);
      
      const time = (+m * 60) + (+s);
      
      if(aScore > bScore) {
          aTime += time - cur;
      } else if (aScore < bScore) {
          bTime += time - cur;
      }
      
      if(team === 1) {
          aScore++;
      } else {
          bScore++;
      }
      
      cur = time;
    }

    if(aScore > bScore) {
      aTime += 48 * 60 - cur;
  } else if(aScore < bScore) {
      bTime +=  48 * 60 - cur;
  } 

  team1[0] = Math.floor(aTime / 60);
  team1[1] = aTime % 60;
  team2[0] = Math.floor(bTime / 60);
  team2[1] = bTime % 60;

  team1 = team1.map(v=>String(v).padStart(2,'0')).join(":");
  team2 = team2.map(v=>String(v).padStart(2,'0')).join(":");

  console.log(team1);
  console.log(team2);
}
solution();
