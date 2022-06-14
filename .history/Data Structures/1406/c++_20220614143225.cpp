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

  for(int i=0;i<m;i++){
    char cmd;
    cin >>cmd;
    auto idx = li.end();

    switch (cmd)
    {
    case 'L':
      idx--;
      break;
    case 'D':
      idx++;
      break;
    case 'P':
      char tmp;
      cin>>tmp; 
      li.insert(idx,tmp);
      idx++;
      break;
    default:
      li.erase(idx);
      idx--;
      break;
    }

  }





}