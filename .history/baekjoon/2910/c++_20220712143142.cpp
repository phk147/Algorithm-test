#include <bits/stdc++.h>
using namespace std;
typedef ll;
const ll INF = 1e18;

int n,c,a[1004];
vector<pair<int,int>> v;
map<int,int> m,mp;

bool cmp(pair<int,int> a, pair<int,int>b){
  if(a.first==b.first) return mp[a.second] < mp[b.second];
  return a.first>b.first;
}

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>c;
  for(int i=0;i<n;i++){
    cin>>a[i];
    mp[a[i]]++;
    if(mp[a[i]]==0) mp[a[i]]=i+1;
  }

  for(auto it:mp){
    v.push_back({it.second, it.first});
  }

  sort(v.begin(),v.end(),cmp);

  for(auto i:v){
    for(int j=0;j<i.first;j++){
      cout<<i.second<<" ";
    }
  }



}