const getTheTitles = function(data) {
    let titles = [];
    for (const book in data) {
        titles.push(data[book]['title']);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
