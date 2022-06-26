#include <bits/stdc++.h>
using namespace std;
int n;
string s;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;
  int cnt = n;

  while(0<n){
    cin>>s;
    int len = s.length();
    for(int i=0;i<len;i++){
      if(s[i]==s[i+1]){
        continue;
      } else {
        if(s.find(s[i],i+1) != string::npos){
          cnt--;
          break;
        }
      }
    }
    n--;
  }
  cout<<cnt<<"\n";

  return 0;
}