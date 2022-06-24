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
        if(s[i]+13>123){
          s[i]=s[i]-26+13;
        }
        s[i]+=13;
      }
      if(s[i]>=65 && s[i]<91){
        if(s[i]+13>91){
          s[i]-=26;
        }
        s[i]+=13;
      }
    }

    cout<<<<"\n";


  return 0;
}