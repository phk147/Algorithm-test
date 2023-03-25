import sys

sys.stdin = open("leetCode/937/input.txt","r")
input = sys.stdin.readline

logs = list(input().split(","))
digit=[]
letter=[]

print(logs)

for log in logs:
    if log.split()[1].isdigit():
        digit.append(log)
    else:
        letter.append(log)

letter.sort(key=lambda x: (x.split()[1:], x.split()[0]))
print(letter+digit)
