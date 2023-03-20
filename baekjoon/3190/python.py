import sys
from collections import deque
sys.stdin = open("baekjoon/3190/input.txt","r")
input = sys.stdin.readline


# 처음에 0,0시작 방향 오른쪽
# 뱀은 매초마다 이동하면서 다음과 같은 규칙을 따른다.
# 몸길이를 늘려 머리를 다음 칸에 위치한다.
# 이동한 칸에 사과가 있으면 사과가 없어지고 꼬리는 움직이지 않는다.
# 사과가 없으면 몸길이를줄요서 꼬리가 위치한 칸을 비워준다. -> 즉 몸길이는 고정

n=int(input())
k=int(input())
apple=[]
for i in range(k):
    [x,y] = list(map(int,input().split()))
    apple.append([x-1,y-1])

l=int(input())
snake=[]
for i in range(l):
    [x,c] = list(input().split())
    snake.append([int(x),c])


sp=deque()
sp.append([0,0])
#북 0 동 1 남 2 서 3
d=1
# 뱀을 이동시키면서 cnt를 증가 -> 사과 검사 -> 게임끝나는 조건 검사
lCnt=0
time=0
dx=[-1,0,1,0]
dy=[0,1,0,-1]
while(1):
    [t,c] = snake[lCnt]
    if(t==time):
        if c=="D":
            d=(d+1)%4
        else:
            d = 3 if d == 0 else (d - 1) % 4
        if(lCnt<l-1):
            lCnt+=1
    
    time+=1

    [x,y]=sp.pop()
    sp.append([x,y])
    nx=x+dx[d]
    ny=y+dy[d]
    
    # 게임 종료 조건
    if(nx<0 or nx>=n or ny<0 or ny>=n or [nx,ny] in sp):
        print(time)
        break

    # 사과 검사
    if any([nx,ny] == sublist for sublist in apple):
        apple.remove([nx,ny])
    else:
        sp.popleft()

    sp.append([nx,ny])
    

    x=nx
    y=ny
    



