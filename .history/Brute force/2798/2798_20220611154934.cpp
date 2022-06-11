#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,m;
  cin>>n>>m;
  
  int card[n];
  for(int i=0;i<n;i++){
    cin>>card[i];
  }

  for(int a : card) cout<<a<<"\n";

  int ans = -9999;
  for (int i = 0; i < n - 2; i++) {
    for (int j = i + 1; j < n - 1; j++) {
      for (int k = j + 1; k < n; k++) {
        int sum = card[i] + card[j] + card[k];
        if (sum > ans && sum <= m) {
          ans = sum;
        }
      }
    }
  }

  cout<<ans<<"\n";

}