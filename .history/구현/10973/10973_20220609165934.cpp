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
    int first=0;
    for(int i=0;i<n;i++){
      cin>>tmp;
      ans.push_back(tmp);
      v.push_back(i+1);
      if(tmp == i+1){
        first++;
      }
    }

    if(first == n){
      cout<<-1<<"\n";
      break;
    }


    do{
      int cnt =0;
      for(int i=0;i<n;i++){
        if(v[i]==ans[i]) cnt++;
      }
      if(cnt == n){
        prev_permutation(v.begin(),v.end());
        break;
      }
    } while(next_permutation(v.begin(),v.end()));


    for(int a:v) cout<<a<<" ";


  return 0;
}