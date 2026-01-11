---
title: "Diamond Pattern"
layout: no-header
back_link: /python
---
```python
a=int(input("Enter a number: "))
for i in range(1,a+1):
    for space in range(a-i):
        print(" ",end="")
    for j in range(1,i+1):
        print("*", end=" ")
    print()
for i in range(a-1,0,-1):
    for space in range(a-i):
        print(" ",end="")
    for j in range(1,i+1):
        print("*", end=" ")
    print()
```
Output:
```
Enter a number: 6
     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
* * * * * * 
 * * * * * 
  * * * * 
   * * * 
    * * 
     *
```
