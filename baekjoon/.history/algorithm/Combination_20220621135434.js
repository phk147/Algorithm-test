function Combination(arr, r) {
  const result = [];
  if (r === 1) return arr.map((num) => [num]);
  arr.forEach((fixed, index, org) => {
    const rest = org.slice(index + 1);
    const combinations = Combination(rest, r - 1);
    const attached = combinations.map((numbers) => [fixed, ...numbers]);
    result.push(...attached);
  });
  return result;
}
