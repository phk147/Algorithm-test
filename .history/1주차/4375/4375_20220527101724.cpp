#include <bits/stdc++.h>
using namespace std;
int n;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    while (cin>>n)
    {
      int cnt =1, ret =1;
      while (true)
      {
        if(cnt % n ==0){
          cout<<ret <<"\n";
          break;
        } else {
          cnt = (cnt*10)+1;
          ret++;
        }
      }
      
    }
    

  return 0;
}