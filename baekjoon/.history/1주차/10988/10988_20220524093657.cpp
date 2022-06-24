#include <bits/stdc++.h>

using namespace std;
string s;
vector<char> stack;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>s;
    
    for(int i=0;i<s.length();i++){
      cout<< s[i]<<"\n";
      stack.push_back(s[i]);
    }


  return 0;
}