#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,k,cnt=0,a[1001];

    cin>>n>>k;
    for(int i=2;i<=n;i++){
      for(int j=i;j<=n;j+=i){
        if(a[j]){
          continue;
        }else {
          a[j]=1;
          cnt++;

          if(cnt == k){
            cout<<j<<"\n";
            cnt = 0;
            break;
          }
        }
      }
    }





  return 0;
}