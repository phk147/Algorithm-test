#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,nums[10]={0,};
  string s;
  cin>>n;

  s = to_string(n);
  for(int i=0;i<s.length();i++){
    nums[(int)s[i]]++;
  }

  for(char a:s) cout <<a<<"\n";
  



  return 0;
}