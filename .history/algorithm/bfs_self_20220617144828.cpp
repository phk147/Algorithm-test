#include <bits/stdc++.h>
using namespace std;

#define X first
#define Y second

int board[502][502] =
{{1,1,1,0,1,0,0,0,0,0},
 {1,0,0,0,1,0,0,0,0,0},
 {1,1,1,0,1,0,0,0,0,0},
 {1,1,0,0,1,0,0,0,0,0},
 {0,1,0,0,0,0,0,0,0,0},
 {0,0,0,0,0,0,0,0,0,0},
 {0,0,0,0,0,0,0,0,0,0}};

bool vis[502][502];

int n=7, m=10;
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};

int main(void){
    queue<pair<int,int>> Q;
    vis[0][0] =1;
    Q.push({0,0});

    while(!Q.empty()){
        pair<int,int> cur = Q.front();
        Q.pop();

    }




}

