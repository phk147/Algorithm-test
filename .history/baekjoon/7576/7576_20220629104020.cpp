#include <bits/stdc++.h>
using namespace std;

int n,m,x,y;
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
      for(int j=0;i<m;j++){
        cin>>graph[i][j];
        if(graph[i][j]==1) check.push_back({i,j}); 
      }
    }

    for(int i=0;i<n;i++){
      fill(visited,visited+m,-2);
    }

    if(check.empty()) return 0;
    else {
      queue<pair<int,int>> q;
      while(!check.empty()){
        tie(int x,int y) = check.back();

      }
    }



  

}