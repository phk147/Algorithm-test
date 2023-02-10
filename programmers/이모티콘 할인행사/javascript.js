function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  input = input.map((v) => v.split(" ").map((val) => +val));

  let emoticons = input.pop();
  let users = input;

  let n = users.length;
  let m = emoticons.length;

  let arr = [];
  let dis = [10, 20, 30, 40];

  // dfs -> 완전탐색
  const dfs = (emoticons, result) => {
    if (!emoticons.length) {
      arr.push(result);
      return;
    }
    for (let i = 0; i < dis.length; i++) {
      dfs(emoticons.slice(1), [...result, [dis[i], emoticons[0] * (1 - dis[i] / 100)]]);
    }
  };

  dfs(emoticons, []);

  let ans = [];

  // 가격에대해서 user적용
  for (let i = 0; i < arr.length; i++) {
    let price = 0;
    let join = 0;
    for (let j = 0; j < n; j++) {
      // 유저 하나에 대해서 가격별로 확인
      let temp = arr[i].filter((v) => v[0] >= users[j][0]);
      if (!temp.length) continue;
      let sum = 0;
      for (let k = 0; k < temp.length; k++) {
        sum += temp[k][1];
      }

      if (sum >= users[j][1]) {
        join++;
      } else {
        price += sum;
      }
    }

    if (!ans.length) ans = [join, price];

    if (ans[0] < join || (ans[0] === join && ans[1] < price)) ans = [join, price];
  }

  console.log(ans);
}

solution();
