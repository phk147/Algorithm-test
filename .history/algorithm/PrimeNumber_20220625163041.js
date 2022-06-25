function isPrime(num) {
  if (num === 2) return true;
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function Eratos(num) {
  let arr = new Array(num + 1).fill(1);
  for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
    if (arr[i] === 0) continue;
    for (let j = i * i; j < num; j += i) {
      arr[j] = 0;
    }
  }
  let result = [];
  for (let i = 2; i <= num; i++) {
    if (arr[i] === 1) result.push(i);
  }

  return result;
}

console.log(isPrime(5453));
console.log(Eratos(100));
