const sumAll = function (num1, num2) {
    if (!(typeof num1 === "number") || !(typeof num2 === "number")) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    let smallNum = num1;
    let largeNum = num2;

    if (num2 < num1) {
        smallNum = num2;
        largeNum = num1;
    }

    let sum = 0;
    for (let i = smallNum; i <= largeNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
