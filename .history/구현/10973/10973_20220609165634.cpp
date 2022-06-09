#include <bits/stdc++.h>
using namespace std;



int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false); //제출 시 삭제
    cin.tie(NULL);
    cout.tie(NULL);

    int n,tmp;
    cin>>n;


    vector<int> ans,v;
    for(int i=0;i<n;i++){
      cin>>tmp;
      ans.push_back(tmp);
      v.push_back(i+1);
    }

    do{
      int cnt =0;
      for(int i=0;i<n;i++){
        if(v[i]==ans[i]) cnt++;
      }
      if(cnt == n){
        v.prev_permutation()
        break;
      }
    } while(next_permutation(v.begin(),v.end()))
    while(1){
      int cnt =0;
      for(int i=0;i<n;i++){
        if(v[i]==ans[i]) cnt++;
      }
      if(cnt == n){
        prev_permutation(v.begin(),v.end())
        break;
      }
    }


    



  return 0;
}