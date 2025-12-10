---
layout: default
title: "C Patterns"
permalink: /c-patterns
---
# C Patterns

Here I’ll keep all my commonly asked C questions and patterns.

## Example 1
Print a pyramid in C:
```c
#include <stdio.h>
int main() {
    int i, j;
    for(i=1;i<=5;i++){
        for(j=1;j<=i;j++){
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
```
