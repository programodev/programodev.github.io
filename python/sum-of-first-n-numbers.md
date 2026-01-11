---
title: "Sum of first n numbers"
layout: no-header
back_link: /python
---
Method I: Using **while** loop
```python
a=int(input("Enter number: "))
sum=0
i=1
while i<=a:
    sum+=i
    i+=1
print(f"Sum of {a} natural numbers is {sum}")
```
Output:
```
Enter number: 5
Sum of 5 natural numbers is 15
```
Explanation:<br>
```python
a=int(input("Enter a number: "))
sum=0
for i in range(1,a+1):
    sum+=i
print(f"Sum of {a} natural numbers is {sum}")
```
Output:
```

```
