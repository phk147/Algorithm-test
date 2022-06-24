#include <bits/stdc++.h>
using namespace std;

bool checkNum(int n);

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n;
  cin>>n;

  int cnt = 0;

  for(int i=1; i<=n;i++){
    if(checkNum(i)) cnt +=1;
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