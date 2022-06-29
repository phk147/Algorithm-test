#include <bits/stdc++.h>
using namespace std;

int n,m;
string graph[1002];
int visited[1002][1002];

int dx[4] = {0,1,0,-1};
int dy[4] = {1,0,-1,0};


int main()
{
  freopen("input.txt", "r", stdin); //제출 시 삭제

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin>>n>>m;

    queue<pair<int,int>> q_F;
    queue<pair<int,int>> q_J;
    for(int i=0;i<n;i++){
      cin>>graph[i];
      for(int j=0;j<m;j++){
        if(graph[i][j]=='F') q_F.push({i,j});
        if(graph[i][j]=='J') q_J.push({i,j});
      }
    }


    //불 전파





  

}

