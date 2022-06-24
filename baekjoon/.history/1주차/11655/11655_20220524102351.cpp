#include <bits/stdc++.h>

using namespace std;
string s;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  getline(cin,s);

    for(int i=0;i<s.size();i++){
      if(97<=s[i]<123){
        s[i]+=13;
      }
    }

    cout<<s<<"n";


  return 0;
}