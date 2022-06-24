#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n,k,cnt=0,a[1001]={0,};

    cin>>n>>k;


    for(int i=2;i<=n;i++){
      if(a[i]){
        continue;
      }
      for(int j=i;j<=n;j+=i){
        if(a[j]){
          continue;
        }

        a[j]++;
        cnt++;

        if(cnt == k){
          cout<<j<<"\n";
          break;
        }

      }
    }

    

  return 0;
}