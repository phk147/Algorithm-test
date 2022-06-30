let bin = "11111010";
let hex = "FA";

function binTohex(num) {
  num = num.split("");
  let [bin_first, bin_second] = [...num.slice(0, 4), ...num.slice(4)];

  console.log(bin_first, bin_second);
}

binTohex(bin);
