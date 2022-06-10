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
      
      

      
    }
  }

  int i =100;
  vector<int> divideNum;
    while(i!=0){
        int tmp = i%10;
        cout<<tmp<<"\n";
        divideNum.insert(divideNum.begin(),tmp);
        i/=10;
      }
  for(int a:divideNum) cout<<a<<" ";
  return 0;
}