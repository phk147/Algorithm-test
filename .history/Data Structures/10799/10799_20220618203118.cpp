#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string s;
    cin>>s;

    int len = s.length();
    stack<char> stk;

    int ans =0;

    for (int i = 0; i < len; i++) {
    if (s[i] == '(') {
      stk.push(s[i]);
    } else {
      if (s[i - 1] =='(') {
        stk.pop();
        ans += stk.length();
      } else {
        stk.pop();
        ans++;
      }
    }
  }

  cout<<ans<<"\n"

  

}