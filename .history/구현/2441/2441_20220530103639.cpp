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

  string a = "abc";

  a.append("*",n-1);

  cout<<a<<"\n";

  for(int i=n;i>=1;i--){
  string s="";
  s.append(" ",n-i);
  s.append("*",n);  
    cout<<s<<"\n";
  }



  return 0;
}