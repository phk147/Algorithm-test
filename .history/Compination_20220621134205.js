function Combinataion(arr, num) {
  let result = [];
  if (!num || num === 1) return arr.map((v) => [v]);

  arr.foerEach((fixed, index, origin) => {
    let rest = origin.slice(index + 1);
    let combination = Combinataion(rest, num - 1);
    let attach = [fixed, ...combination];
    result.push(attach);
  });
  return result;
}

let a = [1, 2, 3, 4];

let com = Combinataion(a, 3);

console.log(com);
