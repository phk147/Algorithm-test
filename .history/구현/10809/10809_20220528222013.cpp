#include <bits/stdc++.h>
using namespace std;
int a[26];
string s;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>s;

  for(char a : s){
    a[(int)a-'a']++;
  }


  return 0;
}