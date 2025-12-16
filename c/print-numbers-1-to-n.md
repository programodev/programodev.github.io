Print numbers from 1 to 10 using **for** loop:
```c
#include <stdio.h>
int main() {
  int i,n;
  printf("Enter number till where to print: ");
  scanf("%d",&n);
  for(i=1;i<=n;i++){
    printf("%d\t",i);
  }
return 0;
}
```
<br><br>
Output:
```
Enter number till where to print: 11
1	2	3	4	5	6	7	8	9	10 11
```
<br><br>
Explanation:
We declare a variable **i** of type int which will be used as a loop counter. We then use is a for loop. It has three parts: Initialization: i = 1 → start with i equal to 1 Condition: i <= 10 → keep looping as long as i is less than or equal to 10 Increment: i++ → after each loop, increase i by 1 So the loop runs with i taking values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 printf("%d\t", i); This prints the value of i, followed by a tab (\t) for spacing. What the program outputs 1    2    3    4    5    6    7    8    9    10 (All separated by tabs.) In short This program prints the numbers 1 through 10 in a row.
