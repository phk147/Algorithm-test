import sys

sys.stdin = open("baekjoon/template/input.txt","r")
input = sys.stdin.readline().strip()

# 제출용
# [a,b]=list(map(int,input().split(" ")))
print(input.split(" "))