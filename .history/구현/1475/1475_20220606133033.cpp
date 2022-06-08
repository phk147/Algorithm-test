#include <bits/stdc++.h>
using namespace std;

int k,temp,ret=0;
vector<int> stk;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>k;

  for(int i =0;i<k;i++){
    cin>>temp;
    if(temp != 0){
      stk.push_back(temp);
    }else{
      stk.pop_back();
    }
  }

  if(!stk.empty()){
    ret = accumulate(stk.begin(),stk.end(),0);
  }

  cout<<ret<<"\n";




  return 0;
}