const removeFromArray = function (array, arg1, arg2 = null, arg3 = null, arg4 = null) {
    return array.filter(
        (element) =>
            !(element === arg1 || element === arg2 || element === arg3 || element === arg4)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
