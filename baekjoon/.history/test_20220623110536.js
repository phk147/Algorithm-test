function binary(n) {
  let ret = [];
  let bin = [0, 1];
  while (n !== 0) {
    let tmp = n % 2;
    n = parseInt(n / 2);
    ret.push(tmp === 0 ? bin[0] : bin[1]);
  }

  let test = [1, 2, 3, 4, 5];
  test.forEach((v) => {
    console.log(v.toString(2));
  });

  console.log(+ret.reverse().join(""));
  console.log(b);
}

binary(5);
binary(15);
binary(4);
binary(8);
binary(20);
