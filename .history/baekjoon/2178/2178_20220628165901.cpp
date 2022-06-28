#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

string graph[102];
int visit[102][102];
int n,m;
int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};

int BFS(int x,int y){
  queue<pair<int,int>> Q;
  visit[x][y] = 0;
  Q.push({x,y});

  while(!Q.empty()){
    pair<int,int> cur = Q.front();
    Q.pop();
    for(int dir=0;dir<4;dir++){
      int nx = cur.X+dx[dir];
      int ny = cur.Y+dy[dir];
      if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if(visit[nx][ny]>=0||graph[nx][ny]!='1') continue;
      visit[nx][ny] = visit[cur.X][cur.Y]+1;
      Q.push({nx,ny});
    }
  }
    return visit[n-1][m-1]+1;
}

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;

    for(int i=0;i<n;i++){
      cin>>graph[i];
    }

    for(int i=0;i<n;i++){
      fill(visit[i],visit[i]+m,-1);
    }

    int answer = BFS(0,0);

  cout<<answer<<"\n";

}