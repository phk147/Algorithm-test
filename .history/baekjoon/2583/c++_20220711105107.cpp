#include <bits/stdc++.h>
using namespace std;

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};

int m,n,k;
int graph[101][101] = {0,};
int vis[101][101]={0,};

queue<pair<int,int>> Q;
int bfs(int x,int y){
  Q.push({x,y});
  vis[x][y] =1;
  int cnt = 1;
  while(!Q.empty()){
    auto cur = Q.front();
    Q.pop();
    for(int dir = 0; dir<4;dir++){
      int nx = cur.first + dx[dir];
      int ny = cur.second + dy[dir];
      if(nx<0||ny<0||nx>=m||ny>=n) continue;
      if(graph[nx][ny]==1||vis[nx][ny]==1) continue;
      cnt++;
      vis[nx][ny]=1;
      Q.push({nx,ny});
    }
  }
  return cnt;
}

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>m>>n>>k;

    for(int i=0;i<k;i++){
      int x1,x2,y1,y2;
      cin>>y1>>x1>>y2>>x2;
      x1=m-x1;
      x2=m-x2;

      for (int x = x2; x < x1; x++) {
        for (int y = y1; y < y2; y++) {
          graph[x][y] = 1;
      }
    }
    }

  

}