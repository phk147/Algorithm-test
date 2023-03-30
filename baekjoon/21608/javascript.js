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
    .split("\n")
    .map((val) => val.trim());

  let score = [0, 1, 10, 100, 1000];

  let n = +input.shift();
  let students = input.map((v) => v.split(" ").map((val) => +val));

  let graph = new Array(n).fill().map((_) => new Array(n).fill(0));

  let queue = new Array(n * n + 1).fill(0);
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  for (let i = 0; i < students.length; i++) {
    let [student, ...like] = students[i];
    if (i === 0) {
      let mid = Math.floor(n / 2);
      graph[mid][mid] = student;
      queue[student] = [mid, mid];
      continue;
    }
    let temp = [];
    for (let l = 0; l < like.length; l++) {
      if (queue[like[l]] === 0) continue;
      let [cx, cy] = queue[like[l]];
      for (let dir = 0; dir < 4; dir++) {
        let nx = cx + dx[dir];
        let ny = cy + dy[dir];
        if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
        if (graph[nx][ny] !== 0) continue;
        let cnt = 0;
        let likeCnt = 0;
        for (let j = 0; j < 4; j++) {
          let checkX = nx + dx[j];
          let checkY = ny + dy[j];
          if (checkX < 0 || checkX >= n || checkY < 0 || checkY >= n) continue;
          if (graph[checkX][checkY] === 0) cnt++;
          if (like.indexOf(graph[checkX][checkY]) !== -1) likeCnt++;
        }

        if (temp.filter((v) => v[2] === nx && v[3] === ny).length) continue;
        temp.push([likeCnt, cnt, nx, ny]);
      }
    }

    let maxEmpty = -1;
    let maxLike = -1;
    for (let a = 0; a < temp.length; a++) {
      maxEmpty = Math.max(maxEmpty, temp[a][1]);
      maxLike = Math.max(maxLike, temp[a][0]);
    }

    console.log(student, temp);
    temp = temp.filter((v) => v[0] === maxLike);
    // 1. 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
    if (temp.length === 1) {
      temp.sort((a, b) => b[0] - a[0]);
      graph[temp[0][2]][temp[0][3]] = student;
      queue[student] = [temp[0][2], temp[0][3]];
      continue;
    }

    temp = temp.filter((v) => v[1] === maxEmpty);
    // 2. 1을 만족하는 칸이 여러개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 정한다.
    if (temp.length === 1) {
      temp.sort((a, b) => b[1] - a[1]);
      graph[temp[0][2]][temp[0][3]] = student;
      queue[student] = [temp[0][2], temp[0][3]];
      continue;
    }
    // 3. 2를 만족하는 칸도 여러개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러개이면 열의 번호가 가장 작은 칸
    temp.sort((a, b) => a[2] - b[2] || a[3] - b[3]);
    graph[temp[0][2]][temp[0][3]] = student;
    queue[student] = [temp[0][2], temp[0][3]];
  }
  const likeCheck = (x, y) => {
    let cnt = 0;
    let student = graph[x][y];
    let like = students.filter((v) => v[0] === student)[0].slice(1);
    for (let dir = 0; dir < 4; dir++) {
      let nx = x + dx[dir];
      let ny = y + dy[dir];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (like.indexOf(graph[nx][ny]) !== -1) cnt++;
    }
    return score[cnt];
  };
  let answer = 0;
  // 만족도-> 그 학생과 인접한 칸에 앉은 좋아하는 학생의 수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      answer += likeCheck(i, j);
    }
  }
  console.log(answer);
}

solution();
