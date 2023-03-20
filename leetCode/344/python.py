import sys

sys.stdin = open("leetCode/344/input.txt","r")
input = sys.stdin.readline

s = list(input())

s.reverse()
s= s[::-1]

print(s)