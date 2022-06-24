#include <bits/stdc++.h>
using namespace std;
int n,k;


int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>k;

  vector<int> nums,ret;

  for(int i=1;i<=n;i++){
    nums.push_back(i);
  }
  int cut=0;
  while(!nums.empty()){
    int ind = (cut + k -1) %nums.size();
    ret.push_back(nums[ind]);
    nums.erase(nums.begin()+ind);
    cut = ind;
  }
  
  for(int i=0;i<n;i++){
  if(i==0){
    cout<<"<"<<ret[i]<<", ";
  } else if (i == n-1){
    cout<<ret[i]<<">";
  } else {
  cout<<ret[i]<<", ";

  }
  } 
  
  



  return 0;
}