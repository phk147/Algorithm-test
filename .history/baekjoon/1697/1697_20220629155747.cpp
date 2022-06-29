#include <bits/stdc++.h>
using namespace std;
int n,k;
int visited[200002];

int dn[3]={1,-1,2};


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>n>>k;
  fill(visited,visited+200002,0);
  
  queue<int> q;
  q.push(n);
  visited[n]=1;

  while(!q.empty()){
    int cur = q.front();
    q.pop();
    for(int i=0;i<3;i++){
      if(i==2){
        int dn = cur * dn[i];
      } else{
        int dn = cur + dn[i];
      }
    }
  }


}