import sys

sys.stdin = open("baekjoon/16953/input.txt","r")
input = sys.stdin.readline().strip()

[a,b]=list(map(int,input.split(" ")))

# 제출용
# [a,b]=list(map(int,input().split(" ")))

ans=-1
def dfs(a,b,cnt):
    global ans
    if(a>b):
        return
    if(a==b):
        ans=cnt
        return
    
    dfs(a*2,b,cnt+1)
    dfs(int("".join(map(str,[a,1]))),b,cnt+1)

dfs(a,b,0)

print(-1 if ans==-1 else ans+1)


