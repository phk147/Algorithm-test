// 순열
function Permutation(arr, r) {
  const result = [];
  if (r === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index, org) => {
    const rest = [...org.slice(0, index), ...org.slice(index + 1)];
    const permutation = Permutation(rest, r - 1);
    const attached = permutation.map((numbers) => [fixed, ...numbers]);
    result.push(...attached);
  });
  return result;
}
//전체 순열
function GetAllPermutation(arr) {
  const results = [];
  arr.forEach((value, index, origin) => {
    results.push(...Permutation(origin, index + 1));
  });

  return results;
}
