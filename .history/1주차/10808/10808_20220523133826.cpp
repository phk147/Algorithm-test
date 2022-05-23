#include <bits/stdc++.h>

using namespace std;

    string s;
char a='z';
int arr[30];
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  getline(cin,s);
//97~ 122
  for(char i=97;i<123;i++){
    for(int j=0;j<s.length();j++){
      int tmp = find(s.begin(),s.end(),i);
    }
  }

  cout<<(int)a-'a'<<"\n";

  return 0;
}