#include <bits/stdc++.h>
using namespace std;
int n;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  for(int i=n;i>=1;i--){
    for(int j=0;j<i;j++){
      cout<<"*";
    }
    cout<<"\n";
  }



  return 0;
}