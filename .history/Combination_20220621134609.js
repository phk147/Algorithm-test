function Combination(arr, num) {
  const result = [];
  if (!num || num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combination = Combination(rest, num - 1);
    const attach = combination.map((numbers) => [fixed, ...numbers]);
    result.push(attach);
  });

  return result;
}

let a = [1, 2, 3, 4];

let com = Combination(a, 3);

console.log(com);
