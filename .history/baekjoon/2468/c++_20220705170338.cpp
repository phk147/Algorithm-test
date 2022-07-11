#include <bits/stdc++.h>
using namespace std;
int n, maxcnt, maxlimit;
int graph[101][101];
bool vis[101][101];
queue<pair<int,int>> Q;

int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};

void bfs(int i, int j, int limit){
  queue<pair<int,int>> q;
  vis[i][j] = 1; 
  q.push({i, j}); 
  while(!q.empty()){
    auto cur = q.front(); q.pop();

    for(int i = 0; i < 4; i++){
      int nx = cur.first + dx[i];
      int ny = cur.second + dy[i];

      if(nx < 0 || nx >= n || ny < 0 || ny >= n) continue; 
      if(vis[nx][ny] == 0 && graph[nx][ny] > limit){  
        vis[nx][ny] = 1;  
        q.push({nx, ny}); 
      }
    }
  }
}

int main(void) {
  ios::sync_with_stdio(0);
  cin.tie(0);

  cin >> n;
  for(int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) { // 0인 영역에서 시작하기
      cin >> graph[i][j];
      maxlimit = max(area[i][j], maxlimit); // 잠기는 최대 높이
    }
  }

  for(int limit = 0; limit <= maxlimit; limit++) {
    for(int i = 0; i < n; i++)
      fill(vis[i], vis[i]+n, 0); // 방문배열 초기화
    
    int cnt = 0;
    for(int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (area[i][j] > limit && vis[i][j] == 0) { // 침수 여부, 방문 여부
          bfs(i, j, limit);
          cnt++;
        }
      }
    }
    maxcnt = max(cnt, maxcnt);
  }
  cout << maxcnt;
}