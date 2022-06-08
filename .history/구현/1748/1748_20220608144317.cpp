#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string input;
    cin>>input;

  int len = input.length();
  int ans = 0;
  for (int i = 1; i < len; i++) {
    ans += i * (pow(10,i) - pow(10,(i - 1)));
  }
  ans += len * ((int)input - pow(10 ,(len - 1)) + 1);

  cout<< ans<<"\n";


  return 0;
}