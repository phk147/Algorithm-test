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
      while(i!=0){
        int tmp = i%10;
        divideNum.insert(divideNum.begin(),tmp);
        i/=10;
      }
      cout<<"finish"<<"\n";
      int num = divideNum[1] -divideNum[0];
      bool check = false;
      for(int i=2;i<divideNum.size();i++){
        if(divideNum[i]-divideNum[i-1] == num){
          check = true;
        } else {
          check = false;
          break;
        }
      }

      if(check) cnt++;
    }
  }

  cout<<cnt<<"\n";


  return 0;
}

bool checkNum(int n){
  int d1,d2,d3;
  d1 = n/100;
  d2 = (n/10)%10;
  d3 = n%10;

  int diff1, diff2;
  diff1 = d2-d1;
  diff2 = d3-d2;

  if(n<100|| diff1 == diff2) return true;
  else return false;
}