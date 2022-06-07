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
    
    for(int i=2;i<n;i*=i){
      if(a[i]==0){
        a[i]++;
        cnt++;
      } else {
        continue;
      }

      if(cnt == k){
        cout<<i<<"\n";
        break;
      }
    }




  return 0;
}