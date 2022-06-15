#include <bits/stdc++.h>
using namespace std;

stack<int> stk;
int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n;
  cin>>n;

  for(int i=0;i<n;i++){
    int tmp;
    cin>>tmp;
    stk.push(tmp);
  }
  
  vector<int> ans;

  while(!stk.empty()){
    int top = stk.top();
    stk.pop();
    vector<int> tmp;
    for(int i=stk.size();i>=1;i--){
      int checkTop = stk.top();
      stk.pop();
      if(top<=checkTop){
        ans.push_back(i);
        tmp.push_back(checkTop);
        break;
      } else {
        tmp.push_back(checkTop);
      }
    }
    reverse(tmp.begin(),tmp.end());
    for(int a: tmp)stk.push(a);
  }

  reverse(ans.begin(),ans.end());

  for(int a:ans)cout<<a<<" ";
  

}