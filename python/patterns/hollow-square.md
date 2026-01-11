---
title: "Hollow Square"
layout: no-header
back_link: /python
---
```python
a=int(input("Enter a number: "))
print()
for i in range(1,a+1):
  for j in range(1,a+1):
    if i==1 or i==a or j==1 or j==a:
      print("*",end=" ")
    else:
      print(" ",end=" ")
  print()
```
Output:
```
Enter a number: 15

* * * * * * * * * * * * * * * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
*                           * 
* * * * * * * * * * * * * * *
```
