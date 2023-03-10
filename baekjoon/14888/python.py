import sys

sys.stdin = open("baekjoon/14888/input.txt","r")
input = sys.stdin.readline


n=int(input())

numbers = list(map(int,input().split()))

operator = list(map(int,input().split()))


maxN = -1e10
minN = 1e10

oper = []

def cal (idx,a,b):
    if idx==0:
        return a+b
    elif idx==1:
        return a-b
    elif idx==2:
        return a*b
    else:
        if a<0:
            return -(-a//b)
        else:
            return a//b
def dfs (cnt):
    global maxN,minN
    if cnt==n-1:
        num = numbers[0]
        for i in range(len(oper)):
            num = cal(oper[i],num,numbers[i+1])
        if num>maxN:
            maxN=num
        if num<minN:
            minN=num
        return
    
    for i in range(4):
        if not operator[i]:
            continue
        operator[i]-=1
        oper.append(i)
        dfs(cnt+1)
        oper.pop()
        operator[i]+=1


dfs(0)

print(maxN)
print(minN)