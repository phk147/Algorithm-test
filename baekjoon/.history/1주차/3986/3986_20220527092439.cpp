#include <bits/stdc++.h>
using namespace std;

int n,cnt;
string s;

stack<char> stk;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n;

    for(int i=0;i<n;i++){
      cin>>s;
      for(int j=0;j<s.length();j++){
        if(stk.empty()) stk.push(s[j]);
        else {
          if(s[j] == stk.top()){
            stk.pop();
          } else {
            stk.push(s[j]);
          }
        }
      }

      if(stk.empty()) cnt ++;
      else while(!stk.empty()) stk.pop();
    }

    cout << cnt<<"\n";



  return 0;
}