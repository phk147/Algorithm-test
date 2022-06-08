#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,nums[10]={0,},x,y;
  cin>>n;
  do{
    x = n/10;
    y = n%10;
    nums[y]++;
  }while(x>0);

  for(int a:nums) cout <<a<<"\n";
  



  return 0;
}