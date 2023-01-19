let count =0;
for(let i=0;i<1000000000000000000;i++){
  let temp = i.split("");
  for(let j=1;j<temp.length;j++){
    if(temp[j-1]==='1'&&temp[j]==='3') {
      count++;
      break;
    }
  }
}

console.log(count);