#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int n,m;
string graph[1002];
int visited_F[1002][1002];
int visited_J[1002][1002];

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;
     for(int i = 0; i < n; i++){
    fill(visited_F[i], visited_F[i]+m, -1);
    fill(visited_J[i], visited_J[i]+m, -1);    
  }

    queue<pair<int,int>> q_F;
    queue<pair<int,int>> q_J;
    for(int i=0;i<n;i++){
      cin>>graph[i];
      for(int j=0;j<m;j++){
        if(graph[i][j]=='F') {
          q_F.push({i,j});
          visited_F[i][j]=1;
        }
        if(graph[i][j]=='J') {
          q_J.push({i,j});
          visited_J[i][j]=1;
      }
    }
    }


    //불 전파
    while(!q_F.empty()){
      auto cur = q_F.front();
      q_F.pop();
      for(int dir=0;dir<4;dir++){
        int nx = cur.X+dx[dir];
        int ny = cur.Y+dy[dir];
        if(nx<0||nx>=n||ny<0||nx>=m) continue;
        if(graph[nx][ny]=='#'||visited_F[nx][ny]>=0) continue;
        visited_F[nx][ny]=visited_F[cur.X][cur.Y]+1;
        q_F.push({nx,ny});
      }
    }

    //지훈 탈출
    while(!q_J.empty()){
      auto cur = q_J.front();
      q_J.pop();
      for(int dir=0;dir<4;dir++){
        int nx = cur.X+dx[dir];
        int ny = cur.Y+dy[dir];
        if(nx<0||nx>=n||ny<0||nx>=m) {
          cout<<visited_J[cur.X][cur.Y]+1<<"\n";
          return 0;
        }
        if(graph[nx][ny]=='#'||visited_J[nx][ny]>=0||visited_F[nx][ny]<=visited_J[cur.X][cur.Y]) continue;
        visited_J[nx][ny]=visited_J[cur.X][cur.Y]+1;
        q_J.push({nx,ny});
      }
      cout<<"IMPOSSIBLE"<<"\n";
    }



  
  return 0;

}