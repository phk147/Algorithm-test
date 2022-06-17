#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int n,m;
queue<pair<int,int>> Q;
bool vis[502][502];
int board[502][502];

int bfs(int i,int j);

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;

    // for(int i=0;i<n;i++){
    //   for(int j=0;j<n;j++){
    //     int tmp;
    //     cin>>tmp;
    //     board[i][j] = tmp;
    //   }
    // }


    int paintcnt = 0;
    int maxNum = -9999;
    for(int i=0;i<n;i++){
      for(int j=0;j<n;j++){
        if(board[i][j]==1&&vis[i][j]!=1){
          paintcnt++;
          int paintNum = bfs(i,j);
          cout<<"i:"<<i<<"j:"<<j<<"\n";
          cout<<"num:"<<paintNum<<"\n";
          maxNum = max(maxNum,paintNum);
        }
        
      }
    }

    cout<<paintcnt<<"\n";
    cout<<maxNum<<"\n";

}

int bfs(int i,int j){
  vis[i][j]=1;
  Q.push({i,j});

  int dx[4]={1,0,-1,0};
  int dy[4]={0,1,0,-1};

  int num=0;
  while(!Q.empty()){
    num+=1;
    pair<int,int> cur = Q.front();
    Q.pop();
    for(int dir = 0;dir<4;dir++){
      int nx = cur.first+dx[dir];
      int ny = cur.second+dy[dir];
      if(nx<0||nx>n||ny<0||ny>m) continue;
      if(vis[nx][ny]==1||board[nx][ny]!=1) continue;
      vis[nx][ny]=1;
      Q.push({nx,ny});
    }
  }

  return num;
}