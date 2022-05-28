#include <bits/stdc++.h>
using namespace std;
string s;
vector<string> ans;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    getline(cin,s);

    if(s.empty()){
      cout<< "0"<<"\n";
      return 0;
    }

    int count = 0;

    for(char a : s) {
      if(a == " "){
        count++;
      }
    }


    if(s[0] == ' ') count--;
    if(s[s.length()-1] == ' ') count--;


    cout << count <<"\n";


  return 0;
}