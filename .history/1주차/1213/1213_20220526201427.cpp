#include <bits/stdc++.h>
using namespace std;
string s,ret;
int flag ,cnt[30];
char mid;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

  for(char a : s) cnt[a]++;
  for(int i='Z';i>='A';i--){
    if(cnt[i]){
      if(a[i] & 1){
        flag++;
        mid = char(i);
      } 
        if(flag ==2){
          break;
        }
        for(int j=0;j<a[i];j++){
        ret = char(i)+ret;
        ret += char(i);
        }
      
    }
  }


  if(mid) ret.insert(ret.begin()+ret.length()/2,mid);
  if(flag ==2) cout <<"I'm Sorry Hansoo\n";
  else cout << ret <<"\n";
  

  return 0;
}

