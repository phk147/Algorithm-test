#include <bits/stdc++.h>
using namespace std;

stack<char> stk;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  while(1){
    string s;
    cin>>s;

    if(s == ".") break;

    vector<char>v;

    for(char a: s){
      if(a=='('||a==')'||a=='['||a==']'){
        if(stk.empty()) stk.push(a);
        else{
          char tmp = stk.top();
          if((a == ')' && tmp == '(') || (a == ']' && tmp == '[')){
            stk.pop();
          } else{
            stk.push(a);
          }
        }
      }
    }

    if(stk.empty()){
      cout<<"yes"<<"\n";
    } else{
      cout<<"no"<<"\n";
    }



  }

}