const exampleArray = [4, 2, 8, 1, 1, 3];

const max = (arr) => {
  let maxNum = arr.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc > cur ? acc : cur;
  });

  console.log(maxNum);
};

max(exampleArray);
