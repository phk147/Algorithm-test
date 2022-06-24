#include <bits/stdc++.h>
using namespace std;

list<char> li;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  string s;
  cin>>s;
  int len = s.length();

  for(char a : s) {
    li.push_back(a);
  }

  int m;
  cin>>m;
    auto idx = li.end();

  for(int i=0;i<m;i++){
    char cmd;
    cin >>cmd;

    switch (cmd)
    {
    case 'L':
    if(idx != li.begin()) idx--;
      break;
    case 'D':
      if(idx != li.end()) idx++;
      break;
    case 'P':
      char tmp;
      cin>>tmp; 
      li.insert(idx,tmp);
      break;
    default:
    if(idx != li.begin()){
      idx--;
      li.erase(idx);
    }
      break;
    }

  }

  for(char a:li) cout<<a;

}