#include <bits/stdc++.h>
using namespace std;

string s;
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
      }
    }
  }


  

  return 0;
}

