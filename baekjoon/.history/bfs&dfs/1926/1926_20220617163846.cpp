#include <bits/stdc++.h>
using namespace std;
#define X first
#define Y second // pair에서 first, second를 줄여서 쓰기 위해서 사용
int board[502][502]; // 1이 파란 칸, 0이 빨간 칸에 대응
bool vis[502][502]; // 해당 칸을 방문했는지 여부를 저장
int n,m;
int dx[4] = {1,0,-1,0};
int dy[4] = {0,1,0,-1}; // 상하좌우 네 방향을 의미

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        cin>>board[i][j];
      }
    }


    int mx = 0;
    int num = 0;
    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        if(board[i][j]==0||vis[i][j]) continue;
          num++;
          queue<pair<int,int>> Q;
          vis[i][j]=1;
          Q.push({i,j});

          int area=0;
          while(!Q.empty()){
            area++;
            pair<int,int> cur = Q.front();
            Q.pop();
            for(int dir = 0;dir<4;dir++){
              int nx = cur.X+dx[dir];
              int ny = cur.Y+dy[dir];
              if(nx<0||nx>=n||ny<0||ny>=m) continue;
              if(vis[nx][ny]||board[nx][ny]!=1) continue;
              vis[nx][ny]=1;
              Q.push({nx,ny});
              }
          }
          mx = max(mx,area);
      }
    }
    

    cout<<num<<"\n"<<mx;
}

// int bfs(int i,int j){
//   queue<pair<int,int>> Q;
//   vis[i][j]=1;
//   Q.push({i,j});

//   int area=0;
//   while(!Q.empty()){
//     area++;
//     pair<int,int> cur = Q.front();
//     Q.pop();
//     for(int dir = 0;dir<4;dir++){
//       int nx = cur.X+dx[dir];
//       int ny = cur.Y+dy[dir];
//       if(nx<0||nx>=n||ny<0||ny>=m) continue;
//       if(vis[nx][ny]||board[nx][ny]!=1) continue;
//       vis[nx][ny]=1;
//       Q.push({nx,ny});
//     }
//   }

//   return area;
// }