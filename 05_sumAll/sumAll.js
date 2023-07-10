/*
Function takes two integers. The numbers are ordered from least to
greatests. Integers between two numbers are found by incrementing 
positively by one in a for-loop. During each iteration, the
current number is added to a variable.
*/

const sumAll = function(num1, num2) {
    let sum = 0;
    if (num1 < 0 | 
        num2 < 0 | 
        typeof num1 !== 'number' | 
        typeof num2 !== 'number') {
        return "ERROR";
    } else if (num1 < num2) {
        for (; num1 <= num2; num1++) {
            sum += num1;
        }
    } else if (num2 < num1) {
        for (; num2 <= num1; num2++) {
            sum += num2;
        }
    } return sum;
};

// Do not edit below this line
module.exports = sumAll;
