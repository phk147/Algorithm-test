function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let [cap, n] = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let deliveries = input
    .shift()
    .split(" ")
    .map((v) => +v);
  let pickups = input
    .shift()
    .split(" ")
    .map((v) => +v);

  let ans = 0;

  while (deliveries.length || pickups.length) {
    // 반복문 한번에 왕복을 계산
    //  deliveries 확인 -> 멀리있는것 부터 확인
    let w = cap;
    let dis1 = 0;
    let dis2 = 0;
    for (let i = deliveries.length - 1; i >= 0; i--) {
      if (deliveries[i] !== 0) {
        // 왕복 거리 더하기
        if (w === cap) dis1 = i + 1;
        if (deliveries[i] <= w) {
          w -= deliveries[i];
          deliveries.pop();
        } else {
          deliveries[i] -= w;
          break;
        }
      } else deliveries.pop();
    }

    w = cap;

    // 픽업 계산
    for (let i = pickups.length - 1; i >= 0; i--) {
      if (pickups[i] !== 0) {
        // 왕복 거리 더하기
        if (w === cap) dis2 = i + 1;
        if (pickups[i] <= w) {
          w -= pickups[i];
          pickups.pop();
        } else {
          pickups[i] -= w;
          break;
        }
      } else pickups.pop();
    }

    ans += Math.max(dis1, dis2) * 2;
  }
  console.log(ans);
}

solution();
