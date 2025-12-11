---
title: "Print first ten natural numbers"
---
Print first ten natural numbers
Method 1: Using **for** loop
```python
for i in range(1,11):
  print(i)
```
<br>Output:
```python
1
2
3
4
5
6
7
8
9
10
```
<br>
Explanation:<br><br>
Method 2: Using **while** loop
```python
i = 1
while i <= 10:
    print(i)
    i += 1
```
<br>Output:
```python
1
2
3
4
5
6
7
8
9
10
```
<br>Explanation:<br><br>
Method 3: Using **range**
```python
print(*range(1, 11))
```
<br>Output:
```python
1 2 3 4 5 6 7 8 9 10
```
<br>Explanation:
<br><br>
Method 4: Using recursion
```python
def show(n):
    if n > 10:
        return
    print(n)
    show(n + 1)
show(1)
```
<br>Output:
```python
1
2
3
4
5
6
7
8
9
10
```
<br>Explanation:
