#include <bits/stdc++.h>
using namespace std;
int a,b;
string str_a,str_b;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >>a >>b;

  str_a = to_string(a);
  str_b = to_string(b);

  reverse(str_a.begin(),str_a.end());
  reverse(str_b.begin(),str_b.end());

  a=stoi(str_a);
  b=stoi(str_b);

  return 0;
}