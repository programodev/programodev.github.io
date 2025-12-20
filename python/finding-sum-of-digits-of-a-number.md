---
title: "Finding sum of digits of a number"
layout: no-header
back_link: /python
---
Find the sum of digits of an input number<br>
Method 1: Using **for** loop
```python
x=input("Enter number: ")
sum=0
for digit in x:
    sum=sum+int(digit)
print(sum)
```
Output:
```
Enter number: 1254
Sum of digit of number is 12
```
Explanation:<br><br><br>
Method 2: Using a **while** loop
```python
x=int(input("Enter number: "))
s=0
while x>0:
    s=s+x%10
    x=x//10
print(f"Sum of digits: {s}")
```
Output:
```
Enter number: 1234
Sum of digits: 10
```
Explanation:<br><br><br>
Method 3: Using **sum()** with list comprehension
```python
x = input("Enter number: ")
s = sum([int(d) for d in x])
print(f"Sum of digits: {s}")
```
Output
```
Enter number: 999
Sum of digits: 27
```
Explanation:<br><br><br>
Method 4: Using recursion
```python
def digit_sum(n):
    if n == 0:
        return 0
    return (n%10)+digit_sum(n//10)
x = int(input("Enter number: "))
print(f"Sum of digits: {digit_sum(x)}")
```
Output:
```
Enter number: 254
Sum of digits: 11
```
Explanation:<br><br><br>
Method 5: Using **map()**
```python
x=input("Enter number: ")
s=sum(map(int, x))
print(f"Sum of digits: {s}")
```
Output:
```
Enter number: 987
Sum of digits: 24
```
Explanation:
