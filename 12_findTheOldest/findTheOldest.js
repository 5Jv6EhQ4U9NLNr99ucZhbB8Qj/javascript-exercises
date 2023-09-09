const findTheOldest = function(data) {
    let ages = [];
    const currentYear = 2023;
    for (const person in data) {
        const yearOfBirth = data[person]['yearOfBirth'];
        const yearOfDeath = data[person]['yearOfDeath'];
        if (yearOfDeath === undefined) {
            ages.push(currentYear - yearOfBirth);   
        } else {
            ages.push(yearOfDeath - yearOfBirth);   
        }
    }

    let oldest = 0;
    ages.forEach((age) => {
        if (age > oldest) {
            oldest = age;
        }
    }, 0);

    return data[ages.findIndex((index) => index === oldest)];
};

// Do not edit below this line
module.exports = findTheOldest;
