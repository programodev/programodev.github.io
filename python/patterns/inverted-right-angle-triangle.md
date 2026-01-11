---
title: "Inverted Right Angle Triangle"
layout: no-header
back_link: /python
---
```python
a=int(input("Enter a number: "))
for i in range(a,0,-1):
    #for space in range(1,a+2-i):
        #print(" ")
    for j in range(1,i+1):
        print("* ", end=" ")
    print()
```
Output:
```
Enter a number: 6
*  *  *  *  *  *  
*  *  *  *  *  
*  *  *  *  
*  *  *  
*  *  
*
```
