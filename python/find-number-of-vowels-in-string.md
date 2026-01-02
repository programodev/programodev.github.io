---
title: "Find number of vowels in string"
layout: no-header
back_link: /python
---
```python
a=input("Enter string: ")
count=0
for b in a:
  if b in "aeiouAEIOU":
    count+=1
print(f"Number of vowels: {count}")
```
Output:
```
Enter string: The quick brown fox jumps over the lazy dog
Number of vowels: 11
```
Explanation:
