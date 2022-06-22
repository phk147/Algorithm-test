let arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
let arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
let arr3 = [3, 5, 7, 9, 1];

function check(arr) {
  let result = [];
  let setArr = [...new Set(arr)];

  setArr.sort((a, b) => a - b);

  setArr.forEach((v) => {
    let cnt = arr.filter((num) => v === num).length;
    if (cnt >= 2) result.push(cnt);
  });

  if (!result.length) console.log(-1);
  else console.log(result);
}

check(arr1);
check(arr2);
check(arr3);
