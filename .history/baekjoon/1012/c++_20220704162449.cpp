#include <bits/stdc++.h>
using namespace std;

int m,n,k;
int graph[51][51];
bool visited[51][51];
queue<pair<int,int>> Q;

int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};

int BFS(int x,int y){
  visited[x][y] = true;
  Q.push({x,y});
  while(!Q.empty()){
    auto cur = Q.front();
    Q.pop();
    for(int dir=0;dir<4;dir++){
       int nx = cur.first + dx[dir];
       int ny = cur.second + dy[dir];
       if(nx<0||nx>=n||ny<0||ny>=m) continue;
       if(graph[nx][ny]!=1||visited[nx][ny]) continue;
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
  int t;
  cin>>t;
  
  while(t--){
    fill(&visited[0][0],&visited[0][0]+51*51,0);
    fill(&graph[0][0],&graph[0][0]+51*51,0);

    int cnt = 0;
    cin>>m>>n>>k;
    int x,y;
    for(int i=0;i<k;i++){
      cin>>x>>y;
      graph[y][x]= 1;
    }

    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        if(graph[i][j]==1&&!visited[i][j]){
          cnt++;
          BFS(i,j);
        }
      }
    }

    cout<<cnt<<"\n";

  }
  return 0;

}