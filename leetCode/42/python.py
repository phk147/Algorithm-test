import sys

sys.stdin = open("leetCode/42/input.txt","r")
input = sys.stdin.readline

height=list(map(int,input().split()))

print(height)
left=0
right=len(height)-1
ans=0

left_max = height[left]
right_max = height[right]

while left<right:
    print(left,left_max)
    print(right,right_max)
    left_max = max(left_max,height[left])
    right_max = max(right_max,height[right])

    if left_max<=right_max:
        ans+=left_max-height[left]
        left+=1
    else:
        ans+= right_max-height[right]
        right-=1

print(ans)