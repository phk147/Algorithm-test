import sys

sys.stdin = open("baekjoon/14499/input.txt","r")
input = sys.stdin.readline().strip()

# 제출용
# [a,b]=list(map(int,input().split(" ")))
print(input.split(" "))