const sumAll = function(numOne, numTwo) {
    if ((numOne<0) || (numTwo<0)) {
        return 'ERROR';
    }
    if ((typeof(numOne) != "number") || (typeof(numTwo) != "number")) {
        return 'ERROR';
    }
    let finalSum = 0;
    if (numOne < numTwo) {
        var i = numOne;
        var lastNum = numTwo;
    } else {
        var i = numTwo;
        var lastNum = numOne;
    }
    for (; i<=lastNum; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
