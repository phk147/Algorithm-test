#include <bits/stdc++.h>
using namespace std;

int n,k;
int s[2][7]={};

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>k;

  for (int i=0; i<n; i++) {
    int a, b;
    cin >> a >> b;
    s[a][b]++;
  }


  int ans =0;  
  for(int i=0;i<2;i++){
    for(int j=1;j<7;j++){
      ans += s[i][j]/k;

      if(s[i][j]%k) ans++;
    }
  }

  cout<<ans<<"\n";




}