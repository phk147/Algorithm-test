#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int t;
  cin>>t;

  while(t--){
    string s;
    cin>>s;
    vector<char> v,ans;
    for(char a:s) v.push_back(a);

    auto idx = ans.begin();
    
    for (int i = 0; i < n; i++) {
    list<char> L = {};
    string s;
    auto p = L.begin();

    cin >> s;
    for (auto c : s) {
      if (c == '<') {
        if (p != L.begin()) p--;
      }
      else if (c == '>') {
        if (p != L.end()) p++;
      }
      else if (c == '-') {
        if (p != L.begin()) {
          p--;
          p = L.erase(p);
        }
      }
      else
        L.insert(p, c);      
    }
    for (auto c : L) cout << c;
    cout << '\n';
  }
}