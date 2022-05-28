#include <bits/stdc++.h>
using namespace std;
string s;

vector<string> split(string input, string delimeter){
  long long pos = 0;
  string temp;
  vector<string> ret;

  while((pos=input.find(delimeter)) != string::npos){
    temp = input.substr(0,pos);
    ret.push_back(temp);
    input.erase(0,pos+delimeter.length());
  }
  ret.push_back(input);
}
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>s;


  return 0;
}