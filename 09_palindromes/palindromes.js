const palindromes = function (string) {
    let letters = [...string.toLowerCase()].filter((char) =>
        ("a" <= char && char <= "z") || ("0" <= char && char <= "9"));

    for (let i = 0; i < letters.length / 2; i++) {
        if (letters[i] !== letters[letters.length - 1 - i]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
