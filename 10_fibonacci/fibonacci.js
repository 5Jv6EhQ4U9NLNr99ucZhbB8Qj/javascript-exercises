/*
Create Fibonacci sequence
Iterate over Fibonacci sequence up to specified number
0 + 1, 1 + 1, 2 + 3, 5 + 4
*/


const fibonacci = function(num) {
    let sequence = [0, 1];
    if (num < 1) {
        return 'OOPS';
    } else {
        for (let i = 1; sequence.length < num + 1; i++) {
            sequence.push(sequence[i] + sequence[i - 1]);
        }
    }
    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
