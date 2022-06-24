#include <bits/stdc++.h>
using namespace std;
int n,temp;
vector<int> v;
int main()
{
  freopen("input.txt", "r", stdin);

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n;

  for(int i=0;i<n;i++){
    cin>>temp;
    v.push_back(temp);
  }

  sort(v.begin(),v.end());

  for(int a:v) cout<<a<<"\n";

  return 0;
}