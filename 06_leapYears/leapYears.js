/*
Function takes years (int) as input.
Leaps years determined by divisibility by 4 and not divisible by 100.
If year is divisible by 100, must also be divisible by 400.
*/

const leapYears = function(year) {
    if (year%4 === 0 && year%100 !== 0) {
        return true;
    } else if (year%100 === 0 && year%400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
