#include <bits/stdc++.h>
using namespace std;
    int n,m;
    vector<int> v(n);

    //binary_search
    bool binarySearch(vector<int>& arr, int low, int high, int target){
      if(low>high) return false;
      int mid = (low+high)/2;

      if(arr[mid]==target) {
        cout<<"find!"<<"\n";
        return true;
      }
      if(arr[mid]>target){
        return binarySearch(arr,low,mid-1,target);
      } else {
        return binarySearch(arr,mid+1,high,target);
      }
    }

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

  for(int a:v)cout<<a<<"\n";

    // cin >>m;
    // //check
    // for(int i=0;i<m;i++){
    //   int check;
    //   cin>>check;

    //   if(binarySearch(v,0,n-1,check)){
    //     cout<<1<<"\n";
    //   } else {
    //     cout<<0<<"\n";
    //   }


    // };
    
  return 0;

  

}