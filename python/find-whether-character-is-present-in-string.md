---
title: "Find whether character is present in string"
layout: no-header
back_link: /python
---
```python
a=input("Enter string: ")
b=input("Enter character to find: ")
for i in a:
  if i==b:
    True
  else:
    False
if True:
    print("It has the given character")
else:
    print("Nothing")
# Displays how many times the input character is present
count=0
for i in a:
    if i==b:
        count+=1
print(count)
```
Output:
```
Enter string: Hello new Coder
Enter character to find: e
It has the given character
3
```
Explanation:
