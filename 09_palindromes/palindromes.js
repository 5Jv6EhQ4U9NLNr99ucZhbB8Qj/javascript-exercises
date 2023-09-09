const palindromes = function (str) {
    let str_modified = str.toLowerCase();
    for (let i = 0 - 1; i < str.length; i++) {
        if (str[i] === ' ' | str[i] === ',' | str[i] === '!' | str[i] === '?' | str[i] === '.' ) {
            str_modified = str_modified.replace(str[i], '');
        }
    }
    
    let str_inverse = ' ';
    for (let i = str_modified.length - 1; i > -1; i--) {
        str_inverse = str_inverse + str_modified[i];
    }
    str_inverse = str_inverse.trimStart();

    
    if (str_modified === str_inverse) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
