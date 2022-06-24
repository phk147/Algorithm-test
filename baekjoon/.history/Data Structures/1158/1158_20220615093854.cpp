#include <bits/stdc++.h>
using namespace std;

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  int n,k,len=0;
  cin>>n>>k;

  int pre[5001];
  int next[5001];
  vector<int> v;


  for(int i =1;i<=n;i++){
    pre[i] = (i==1) ? n:i-1;
    next[i] = (i==n) ? 1 : i+1;
    len++;
  }

  // int cnt =1;
  // for(int cur = 1; len !=0;cur=next[cur]){
  //   if(cur == k){
  //     pre[next[cur]] = pre[cur];
  //     next[pre[cur]] = next[cur];
  //     v.push_back(cur);
  //     cnt = 1;
  //     len--;
  //   } else cnt++;
  // }
  
  int i = 1;

  for(int cur = 1; len != 0; cur = next[cur]){
    // K 번째일 때 제거
    if(i == k){
      pre[next[cur]] = pre[cur];
      next[pre[cur]] = nxt[cur];
      v.push_back(cur);
      i = 1;
      --len;
    } else ++i;
  }

  cout<<"<";
  for(int a : v)cout<<a<<", ";
  cout<<">";

  return 0;



}