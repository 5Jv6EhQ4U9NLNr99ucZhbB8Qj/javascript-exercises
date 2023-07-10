/*
Compares each item in source to target values. Each source item is
compared to every target value and is assigned a true/false stored in
the variable differenceCheck. If the source and target are different,
differenceCheck will be true, and vice verss. Once the source item has
been compared to each target value and if differenceCheck is true, the
source item will be appended to newArray. This process is done for each
source item. The function will return newArray; it is the source array
with target values excluded.
*/

const removeFromArray = function(source, target) {
    const newArray = [];
    let differenceCheck;
    for (let i = 0; i < source.length; i++) {
        for (let j = 1; j < arguments.length; j++)
            if (source[i] !== arguments[j]) {
                differenceCheck = true;
            } else {
                differenceCheck = false;
                break;
            }
        if (differenceCheck) {
            newArray.push(source[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
