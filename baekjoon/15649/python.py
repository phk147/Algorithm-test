import sys

sys.stdin = open("baekjoon/15649/input.txt","r")
[n,m] = list(map(int,sys.stdin.readline().strip().split(" ")))


arr = [0 for i in range(m)]
vis =[0]*10

def backTracking (k):
    if(k==m):
        print(" ".join(map(str,arr)))
        return
    for i in range(1,n+1):
        if vis[i] == 0:
            arr[k]=i
            vis[i]=1
            backTracking(k+1)
            vis[i]=0

backTracking(0)
