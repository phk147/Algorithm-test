#include <bits/stdc++.h>
using namespace std;

int n,m ,a[150004] ,cnt=0;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >> n >>m ;
  
  for(int i=0;i<n;i++)cin>>a[i];
  sort(a,a+n);
  for(int i=0;i<n;i++){
    if(m>200000) cout<<0<<"\n";
    else {
      for(int i=0;i<n;i++){
        for(int j=1;j<n;j++){
          if(a[i]+a[j] == m) cnt++;
        }
      }
    }
  }
  
  cout<<cnt<<"\n";


  return 0;
}

