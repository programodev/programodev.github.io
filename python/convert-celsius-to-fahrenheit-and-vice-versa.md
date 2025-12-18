---
title: "Convert Celcius to Fahrenheit and vice versa"
---
```python
z=int(input("Enter 1 for C to F else 2 for F to C: "))
if z==1:
  a=float(input("Enter value for Celcius: "))
  b=(a*9/5)+32
  print(f"Value of {a} in fahrenheit is {b:.2f} F")
else:
  c=float(input("Enter value for Fahrenheit: "))
  d=(c-32)*5/9
  print(f"Value of {c} in celcius is {d:.2f} C")
```
Output:
```
Enter 1 for C to F else 2 for F to C: 1
Enter value for Celcius: 10.5
Value of 10.5 in fahrenheit is 50.90 F
```
Explanation:
