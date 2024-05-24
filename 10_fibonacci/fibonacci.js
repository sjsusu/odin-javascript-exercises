const fibonacci = function(num) {
    if (isNaN(num) || num < 0) {
        return "OOPS";
    }

    let n = Number(num);

    if (n===0) {
        return 0;
    } else if (n===1||n===2) {
        return 1;
    }

    let fib_N_1 = 1;
    let fib_N_2 = 1;
    let fib_N = 0;

    for (let i = 3; i<=n; i++){
        fib_N = fib_N_1 + fib_N_2;
        fib_N_1 = fib_N_2;
        fib_N_2 = fib_N; 
    }

    return fib_N;
};

// Do not edit below this line
module.exports = fibonacci;
