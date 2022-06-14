/**
 * 제출용. 아래 로컬용을 지우고 제출하자.
 */
//  let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
/**
 * 로컬용, 예제.txt를 생성해서 예제를 복붙하자.
 */

function solution() {
  let input = require("fs")
    .readFileSync("input.txt") //"/dev/stdin"
    .toString()
    .trim()
    .split("\n")
    .map((val) => val.trim());

    let n = +input.splice(0,1)[0];
    
    for(let i=0;i<n;i++){
      let [s1,s2]= input.splice(0,1);
      let arr = new Array(26).fill(0);
      cin>>s1>>s2;

      for(char a : s1) arr[a-'a']++;
      for(char b : s2) arr[b-'a']--;


      for(int i=0;i<26;i++){
        if(arr[i]!=0){
          check = false;
          break;
        }
      }

      if(check){
        cout<<"Possible"<<"\n";
      } else {
        cout<<"Impossible"<<"\n";
      }
      

    }
  }

solution();
