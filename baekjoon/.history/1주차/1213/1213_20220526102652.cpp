#include <bits/stdc++.h>
using namespace std;

string s,ret;
char mid;

int cnt[100], flag;

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
      if(cnt[i] & 1){
        mid = char(i);
        flag++;
        cnt[i]--;
      }
      if(flag==2) break;
      for(int j=0;j<cnt[i];j+=2){
        ret = char(i) +ret;
        ret += char(i);
      }
    }
  }
  if(mid) ret.insert(ret.begin()+ret.size()/2,mid);


  

  return 0;
}

