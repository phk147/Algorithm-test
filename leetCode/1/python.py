import sys

sys.stdin = open("leetCode/1/input.txt","r")
input = sys.stdin.readline

nums = list(map(int,input().split()))
target = int(input())
for i in range(len(nums)-1):
    for j in range(i+1,len(nums)):
        if nums[i]+nums[j]== target:
            print([i,j])
