#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int e, s, m;
  cin>>e>>s>>m;

  int i = 1;
  while (1) {
    if ((i - e) % 15 == 0 && (i - s) % 28 == 0 && (i - m) % 19 == 0) {
      cout<<i<<"\n";
      break;
    }
    i++;
  }

}