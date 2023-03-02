import sys

sys.stdin = open("baekjoon/1987/input.txt","r")

n,m = map(int,input().split(" "))

board = [list(map(lambda a : ord(a)-65,input())) for _ in range(n)]
ans=0

dx=[0,1,0,-1]
dy=[1,0,-1,0]

vis = [0]*26


def dfs (x,y,cnt):
    global ans
    if ans<cnt:
        ans = cnt
    vis[board[x][y]] =1
    for dir in range(4):
        nx = x+dx[dir]
        ny = y+dy[dir]
        if 0 <= nx < n and 0 <= ny < m and vis[board[nx][ny]] == 0:
            vis[board[nx][ny]]=1
            dfs(nx,ny,cnt+1)
            vis[board[nx][ny]]=0


dfs(0,0,1)

print(ans)

