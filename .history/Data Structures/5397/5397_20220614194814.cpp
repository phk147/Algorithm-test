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
    vector<char> v;
    for(char a:s) v.push_back(a);

    auto idx = v.begin();
    string ans;
    for(char a:v){
      if(a =='<'){
        if(idx!=v.begin()) idx--;
      } else if(a == '>'){
        if(idx!=v.end()) idx++;
      } else if(a == '-'){
        ans.erase(idx,0);
      } else {
        ans+=a;
      }
    }

  }
  


}