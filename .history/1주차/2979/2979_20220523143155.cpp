#include <bits/stdc++.h>

using namespace std;

int a,b,c,s,e,ret;
int cnt[104];
int main()
{
  freopen("input.txt", "r", stdin);
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin >> a>>b>>c;

  for(int i=0;i<3;i++){
    cin>> s>>e;
    for(int j=s;j<e;j++) cnt[j]++;
  }
   for(int i=1;i<100;i++){
     if(cnt[i]){
       if(cnt[i]==1) ret+=a;
       else if(cnt[i]==2) ret+=b*2;
       else if(cnt[i]==3) ret+=c*3;
     }
   }
   cout<< ret<<"\n"
  


}