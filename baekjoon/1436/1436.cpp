#include <bits/stdc++.h>
using namespace std;


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int cnt=0,n,num = 666;
    cin>>n;

    while(cnt<=n){
      string a = to_string(num);
      for(int i=0;i<a.length()-2;i++){
        if(a[i]=='6'&&a[i+1]=='6'&&a[i+2]=='6'){
          cnt++;
          break;
        }
      }

      if(cnt == n){
        cout<<num<<"\n";
        break;
      }
      num++;
    }
      

}