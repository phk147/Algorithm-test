#include <bits/stdc++.h>
using namespace std;
string s,ret;
int flag ,a[30];
char mid;
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

  for(int i=0;i<26;i++){
    if(a[i]){
      if(a[i] & 1){
        flag++;
        mid = (char)a[i];
        if(flag ==2){
          break;
        }
      } else {
        ret = (char)a[i]+ret;
        ret += (char)a[i];
      }
    }
  }


  if(mid) ret.insert(ret.begin()+ret.length()/2,mid);
  if(flag ==2) cout <<"I'm Sorry Hansoo\n";

  cout << ret <<"\n";
  

  return 0;
}

