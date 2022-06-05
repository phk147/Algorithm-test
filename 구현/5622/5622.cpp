#include <bits/stdc++.h>
using namespace std;
string s;
map<char,int> _map1;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;
  int cnt = 0;
  for(char a:s){
  switch(a){
      case 'A':case 'B':case 'C':
        cnt +=3;
        break;
      case 'D':case 'E':case 'F':
        cnt +=4;
        break;
      case 'G':case 'H':case 'I':
        cnt +=5;
        break;
      case 'J':case 'K':case 'L':
        cnt +=6;
        break;
      case 'M':case 'N':case 'O':
        cnt +=7;
        break;
      case 'P':case 'Q':case 'R':case 'S':
        cnt +=8;
        break;
      case 'T':case 'U':case 'V':
        cnt +=9;
        break;
      case 'W':case 'X':case 'Y':case 'Z':
        cnt +=10;
        break;
      default:
        cnt+=11;
        break;
    }
  }
  
  cout<<cnt<<"\n";

  return 0;
}