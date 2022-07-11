#include <bits/stdc++.h>
using namespace std;

int n,m,j,l,r,temp,ret;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m>>j;

    l=1;
    for(int i=0;i<j;i++){
      r = l+m-1;
      cin>>temp;
      if(temp>=l&&temp<=r) continue;
      else{
        if(temp<l){
          ret += (l-temp);
          l=temp;
        } else{
          l += (temp-r);
          ret += (temp-r);
        }
      }
    }

  cout<<ret<<"\n";
  return 0;

}