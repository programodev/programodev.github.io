---
title: "Find greater among two numbers"
---
Method 1: Using **if else**
```python
a=int(input("Enter number 1: "))
b=int(input("Enter number 2: "))
if a>b:
  print(f"{a} is greater than {b}")
else:
  print(f"{b} is greater than {a}")
```
Output:
```python
Enter number 1: 10
Enter number 2: 20
20 is greater than 10
```
Explanation:
<br><br><br>
Method 2: Using **conditional expression**
```python
a=int(input("Enter number 1: "))
b=int(input("Enter number 1: "))
max=a if a>b else b
print(f"The greater among two is {max}")
```
Output:
```python
Enter number 1: 20
Enter number 1: 50
The greater among two is 50
```
Explanation:
