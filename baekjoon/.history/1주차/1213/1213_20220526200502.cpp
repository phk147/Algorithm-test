#include <bits/stdc++.h>
using namespace std;
string s;
int flag ,a[30];
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

  for(int i=0;i<s.length();i++){
    a[s[i]-'A']++;
  }
  

  return 0;
}

