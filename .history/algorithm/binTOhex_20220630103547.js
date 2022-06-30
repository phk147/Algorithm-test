let bin = "11111010";
let hex = "FA";

function binTohex(num) {
  num = num.split("");
  let [bin_first, bin_second] = [num.slice(0, 4), num.slice(4)];

  let ret1 = 0;
  let ret2 = 0;
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      ret1 += +bin_first[i] * 8;
      ret2 += +bin_second[i] * 8;
    } else if (i === 1) {
      ret1 += +bin_first[i] * 4;
      ret2 += +bin_second[i] * 4;
    } else if (i === 2) {
      ret1 += +bin_first[i] * 2;
      ret2 += +bin_second[i] * 2;
    } else {
      ret1 += +bin_first[i];
      ret2 += +bin_second[i];
    }
  }

  console.log(bin_first, bin_second);
}

binTohex(bin);
