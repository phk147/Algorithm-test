#include <bits/stdc++.h>
using namespace std;
int n;
string str;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  for(int i=n;i>=1;i--){
    cout<<str.append("*",i)
  }



  return 0;
}