#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,x;
  cin>>n;
  int arr[n];
  bool occur[2000001];

  for(int i=0;i<n;i++) {
    cin>>arr[i];
  }


  cin>>x;

  int cnt =0;

  for(int i=0;i<n;i++){
    if(x-arr[i]>0 && occur[x-arr[i]]) cnt++;
    occur[arr[i]]= true;
  }

  cout<<cnt<<"\n";


}