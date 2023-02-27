import sys

sys.stdin = open("baekjoon/13023/input.txt","r")
input = sys.stdin.readline

n,m = map(int,input().split(" "))

friends = [[] for _ in range(n+1)]
for i in range(m):
    a,b = map(int,input().split(" "))
    friends[a].append(b)
    friends[b].append(a)

vis = [0]*2001
ans = 0
def dfs (x,cnt):
    global ans
    vis[x]=1
    if cnt==4:
        ans=1
        return
    if len(friends[x])==0:
        return
    
    for i in friends[x]:
        if vis[i]==0:
            vis[i]=1
            dfs(i,cnt+1)
            vis[i]=0


for i in range(n):
    dfs(i,0)
    vis[i]=0

    if ans==1:
        break


print(ans)



