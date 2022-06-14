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
    
    for(char a:v){
      if(a =='<'){
        if(idx!=ans.begin()) idx--;
      } else if(a == '>'){
        if(idx!=ans.end()) idx++;
      } else if(a == '-'){
        if(idx!=ans.begin())
        idx--;
        idx = ans.erase(idx);
      } else {
        ans.insert(idx,a);
      }
    }

    for(auto a:ans)cout<<a;
    cout<<"\n";

  }
}