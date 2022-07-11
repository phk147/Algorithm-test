#include <bits/stdc++.h>
using namespace std;
int n;
int graph[101][101];
bool visited[101][101];
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
       if(nx<0||nx>=n||ny<0||ny>=n) continue;
       if(graph[nx][ny]!=1||visited[nx][ny]) continue;
       visited[nx][ny]=1;
       Q.push({nx,ny});
    }
  }
  return 0;
}


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

  

}