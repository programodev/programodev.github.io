---
title: "Find the reverse of a number"
layout: no-header
---
```python
x=int(input("Enter number: "))
rev=0
while x>0:
    rev=rev*10+(x%10)
    x=x//10
print(f"Sum of digit of number is {rev}")
```
<br>Output:
```python
Enter number: 1234
Reverse of number is 4321
```
<br>Explanation:
