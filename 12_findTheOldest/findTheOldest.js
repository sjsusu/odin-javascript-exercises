const findTheOldest = function (people) {
    let oldest = [null, 0];
    let age = 0;

    people.forEach(person => {

        if (person.yearOfDeath !== undefined) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            age = new Date().getFullYear() - person.yearOfBirth;
        }

        if (age > oldest[1]) {
            oldest = [person, age];
        }
    });

    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
