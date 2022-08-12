# Exercise 05 - sumAll

Implement a function that takes 2 integers and returns the sum of every number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```


## Hints

Think about how you would do this on pen and paper and then how you might translate that process into code:
- make sure you pay attention to the function parameters
- create a variable to hold the final sum
- loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
- on each iteration add the number to the sum
- return the sum after finishing the loop

1.) Make sure you have positive integers
    a.) if (numOne<0) || if (numTwo<0) {
        return 'ERROR'
    }
    b.) if (typeof(numOne)!="string") || if (typeof(numTwo) != "string) {
        return 'ERROR'
    }
2.) Initialize variable to hold the final sum (finalSum)
let finalSum = 0;
3.) Find the smallest number
if (numOne < numTwo) {
4.) Initialize the counter to the smalles number
    let i=numOne;
    let lastNum=numTwo;
} else {
    let i=numTwo;
    let lastNum=numOne;
}
5.) Loop through the given numbers, starting with the smallest number.
for (i<=lastNum; i++)
    a.) Add number to finalSum
    finalSum += i;
6.) return sum
return finalSum