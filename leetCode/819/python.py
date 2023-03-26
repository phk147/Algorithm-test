import sys
from string import punctuation
from collections import Counter

sys.stdin = open("leetCode/819/input.txt","r")
input = sys.stdin.readline

paragraph = input()
banned = list(input().split())
for character in punctuation:
    paragraph = paragraph.replace(character," ")
paragraph = list(paragraph.lower().split())

counts = Counter(paragraph)

for word in banned:
    del counts[word]

print(max(counts, key=counts.get))


