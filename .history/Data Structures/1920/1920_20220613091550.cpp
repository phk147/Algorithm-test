#include <bits/stdc++.h>
using namespace std;
    int n,m;
    vector<int> v(n);

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    //input
    cin>>n;

    for(int i=0;i<n;i++) cin>>v[i];
    
  sort(v.begin(),v.end());

    cin >>m;
    //check
    for(int i=0;i<m;i++){
      int check;
      cin>>check;



      if(find(v.begin(),v.end(),check) != v.end()){
        cout<<1<<"\n";
      } else {
        cout<<0<<"\n";
      }

    };
    
  return 0;

  

}