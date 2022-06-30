let bin = "11111010";
let hex = "FA";

function binTohex(num) {
  let bin_first = num.split("").splice(0, 4);
  let bin_second = num;

  console.log(bin_first, bin_second);
}

binTohex(bin);
