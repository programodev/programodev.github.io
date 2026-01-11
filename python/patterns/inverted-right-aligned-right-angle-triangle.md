---
title: "Inverted Right Aligned Right Angle Triangle"
layout: no-header
back_link: /python
---
```python
a=int(input("Enter a number: "))
for i in range(a,0,-1):
    for space in range(a-i,0,-1):
        print("  ",end="")
    for j in range(1,i+1):
        print("* ", end="")
    print()
```
Output:
```
Enter a number: 5
* * * * * 
  * * * * 
    * * * 
      * * 
        *
```
