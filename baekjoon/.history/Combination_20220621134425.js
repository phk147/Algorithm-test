function Combination(arr, num) {
  let result = [];
  if (!num || num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    let rest = origin.slice(index + 1);
    let combination = Combination(rest, num - 1);
    let attach = fixed, ...combination];
    result.push(attach);
  });

  return result;
}

let a = [1, 2, 3, 4];

let com = Combination(a, 3);

console.log(com);
