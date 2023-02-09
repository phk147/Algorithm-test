function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .split("\n")
    .map((val) => val.trim());

  let book_time = input.map((v) => v.split(" "));
  // 데이터 정렬
  for (let i = 0; i < book_time.length; i++) {
    book_time[i] = book_time[i].map((v) => v.split(":").map((val) => +val));
  }
  // 시간순으로 정렬
  book_time.sort((a, b) => {
    if (a[0][0] === b[0][0]) return a[0][1] - b[0][1];
    return a[0][0] - b[0][0];
  });

  // room을 지정하면서 확인
  let room = [];

  for (let i = 0; i < book_time.length; i++) {
    let temp = book_time[i];

    // 청소시간 로직 추가
    if (temp[1][1] >= 50) {
      temp[1][0] += 1;
      temp[1][1] -= 50;
    } else {
      temp[1][1] += 10;
    }

    // 방이 비었을때
    if (!room.length) room.push(temp);
    else {
      // 방이 안비었는데 미리 들어간 사람이 있을때
      let idx = room.findIndex((v) => {
        return v[1][0] < temp[0][0] || (v[1][0] === temp[0][0] && v[1][1] + 10 <= temp[0][1]);
      });

      if (idx !== -1) {
        // 입실 가능
        room[idx] = temp;
      } else {
        // 입실 불가능
        room.push(temp);
      }
    }
  }
  console.log(room.length);
}

solution();
