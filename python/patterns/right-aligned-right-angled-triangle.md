---
title: "Right aligned Right Angled Triangle"
layout: no-header
back_link: /python
---
```python
a=int(input("Enter a number: "))
for i in range(1,a+1):
    for space in range(a-i,0,-1):
        print("  ",end="")
    for j in range(1,i+1):
        print("* ", end="")
    print()
```
Output:
```
Enter a number: 5
        * 
      * * 
    * * * 
  * * * * 
* * * * *
```
