#include <bits/stdc++.h>
using namespace std;

int t,m,n,k,x,y;
int graph[52][52];
int visited[52][52];

int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};

int BFS(int X,int Y){
  visited[X][Y] = 1;
  queue<pair<int,int>> Q;
  Q.push({X,Y});
  while(!Q.empty()){
    auto cur = Q.front();
    Q.pop();
    for(int dir=0;dir<4;dir++){
       int nx = cur.first + dx[dir];
       int ny = cur.second + dy[dir];
       if(nx<0||nx>=n||ny<0||ny>=m) continue;
       if(graph[nx][ny]!=1||visited[nx][ny]==1) continue;
       visited[nx][ny]=1;
       Q.push({nx,ny});
    }
  }

}


int main()
{

    freopen("input.txt", "r", stdin);
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  cin>>t;
  
  while(t--){
    fill(&visited[0][0],&visited[0][0]+52*52,0);
    fill(&graph[0][0],&graph[0][0]+52*52,0);
    int cnt = 0;
    cin>>m>>n>>k;

    for(int i=0;i<k;i++){
      cin>>x>>y;
      graph[y][x]= 1;
    }

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(graph[i][j]==1&&visited[i][j]==0){
          cnt++;
          BFS(i,j);
        }
      }
    }

    cout<<cnt<<"\n";

  }
  return 0;

}