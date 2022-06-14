#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,x,arr[9];
  cin>>n;

  for(int i=0;i<n;i++) cin>>arr[i];

  cin>>x;

  int cnt =0;
  for(int i=0;i<n;i++){
    for(int j=0;i<n;j++){
      if(abs(arr[i]+arr[j]) == 13) cnt++;
    }
  }

  cout<<cnt<<"\n";





}