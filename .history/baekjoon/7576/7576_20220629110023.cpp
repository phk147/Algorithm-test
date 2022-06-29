#include <bits/stdc++.h>
using namespace std;

int n,m,x,y,ret=0;
int graph[1002][1002];
int visited[1002][1002];

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};

int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>m>>n;

    vector<pair<int,int>> check;
    for(int i=0;i<n;i++){
      for(int j=0;j<m;j++){
        cin>>graph[i][j];
        if(graph[i][j]==1) {
          check.push_back({i,j}); 
          }
      }
    }

    for(int i=0;i<n;i++){
      fill(visited[i],visited[i]+m,-2);
    }

    if(check.empty()) cout<<ret<<"\n";
    else {
      queue<pair<int,int>> q;
      while(!check.empty()){
        tie(x,y) = check.back();
        check.pop_back();
        visited[x][y]=0;
        q.push({x,y});
      }

      while(!q.empty()){
        tie(x,y) = q.front();
        q.pop();
        for(int dir=0;dir<4;dir++){
          int nx = x+dx[dir];
          int ny = y+dy[dir];
          if(nx<0||nx>=n||ny<0||ny>=m) continue;
          if(graph[nx][ny]==-1||visited[nx][ny]>-2) continue;
          visited[nx][ny]=visited[x][y]+1;
          q.push({nx,ny});
        }
      }
      for(int i=0;i<n;i++){
        int temp = *max_element(visited[i],visited[i]+m);
        ret = max(ret,temp);
      }
      cout<<ret<<"\n";
      return ret;
    }
}