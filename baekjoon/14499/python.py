import sys

sys.stdin = open("baekjoon/14499/input.txt","r")
input = sys.stdin.readline

n,m,x,y,k = map(int,input().split())
graph = []
for i in range(n):
    graph.append(list(map(int,input().split())))

moveArr = list(map(int,input().split()))

moveArr = list(map(lambda v: v - 1, moveArr))



dice = {
    "top": 0,
    "bot": 0,
    "right": 0,
    "left": 0,
    "front": 0,
    "back": 0,
}

def move(num):
    global dice
    top, bot, right, left, front, back = dice.values()
    if num == 0:
        arr = [left, top, right, bot, front, back]
    elif num == 1:
        arr = [right, bot, left, top, front, back]
    elif num == 2:
        arr = [front, right, back, left, bot, top]
    elif num == 3:
        arr = [back, right, front, left, top, bot]
    dice["top"], dice["right"], dice["bot"], dice["left"], dice["front"], dice["back"] = arr


cnt=0
dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
while(1):
    if cnt==k:
        break
    
    nx=x+dx[moveArr[cnt]]
    ny=y+dy[moveArr[cnt]]


    if(0<=nx<n and 0<=ny<m):
        move(moveArr[cnt])
        if graph[nx][ny]==0:
            graph[nx][ny]=dice["bot"]
        else:
            dice["bot"]=graph[nx][ny]
            graph[nx][ny]=0

        print(dice["top"])        
        x=nx
        y=ny
    
    cnt+=1

