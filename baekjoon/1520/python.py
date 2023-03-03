import sys

sys.stdin = open("baekjoon/1520/input.txt","r")
input = sys.stdin.readline

n,m = map(int,input().rstrip().split())
graph = [list(map(int,input().rstrip().split())) for _ in range(n)]

dp = [[-1]*m for _ in range(n)]
dp[n-1][m-1]=1

dx=[0,1,0,-1]
dy=[1,0,-1,0]

def dfs (x,y):
    if dp[x][y]!=-1:
        return dp[x][y]
    
    dp[x][y]=0
    for dir in range(4):
        nx = x+dx[dir]
        ny = y+dy[dir]
        if(0<=nx<n and 0<=ny<m and graph[nx][ny]<graph[x][y]):
            dp[x][y] += dfs(nx,ny)
        
    
    return dp[x][y]

print(dfs(0,0))





