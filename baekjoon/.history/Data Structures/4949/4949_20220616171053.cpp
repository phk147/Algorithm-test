#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  while(1){
    string s;
    getline(cin,s);
    if(s == ".") break;

    stack<char> stk;

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
      continue;
    } else{
      cout<<"no"<<"\n";
      continue;
    }





  }

}