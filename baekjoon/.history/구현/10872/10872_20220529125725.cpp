#include <bits/stdc++.h>
using namespace std;
int n,ret=1;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  for(int i=1;i<=n;i++){
    ret*=i;
  }

  cout<<ret <<"\n";


  return 0;
}