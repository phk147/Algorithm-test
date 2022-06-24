#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,m;
    cin>>n>>m;

    vector<string> square;
    for(int i=0;i<n;i++){
      string tmp;
      cin>> tmp;
      square.push_back(tmp);
    }

    int min = min(n, m);

  int ans = 1;
  for (int size = 2; size <= min; size++) {
    for (int i = 0; i <= n - size; i++) {
      int end = size - 1;
      for (int j = 0; j <= m - size; j++) {
        int tmp = square[i][j];
        if (square[i][j + end] == tmp && square[i + end][j] == tmp && square[i + end][j + end] == tmp) {
          ans = size;
          break;
        }
      }
    }
  }

    
  cout<<ans*ans<<"\n";



  return 0;
}