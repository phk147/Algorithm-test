#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false); //제출 시 삭제
    cin.tie(NULL);
    cout.tie(NULL);

  int n;
  cin>>n;

  int cnt = 0;

  if (n <= 99) {
    cnt += n;
  } else {
    cnt += 99;
    for (int i = 100; i <= n; i++) {
      vector<int> divideNum;
      while(i){
        int tmp = i%10;
        divideNum.push_back(tmp);
      }

      let len = divideNum.length;
      let tmp = divideNum[1] - divideNum[0];
      let check = false;
      for (let j = 2; j < len; j++) {
        if (tmp !== divideNum[j] - divideNum[j - 1]) {
          check = false;
          break;
        } else {
          check = true;
        }
      }
      if (check) {
        cnt++;
        check = false;
      }
    }
  }
    

  return 0;
}