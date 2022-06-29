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

  if(n==0&&k==0) {cout<<0<<"\n"; return 0;}
  fill(visited,visited+200002,-1);
  
  queue<int> q;
  q.push(n);
  visited[n]=0;

  while(visited[k]==-1){
    int cur = q.front();
    q.pop();
    for(int dir=0;dir<3;dir++){
      int dx;
      if(dir==2){
        dx = cur * dn[dir];
      } else{
        dx = cur + dn[dir];
      }

      if(dx<0||dx>k) continue;
      if(visited[dx]>=0) continue;
      visited[dx] = visited[cur]+1;
      q.push(dx);
    }
  }


  return 0;


}