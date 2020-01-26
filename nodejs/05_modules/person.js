
class Person {
    constructor(
        firstname,
        lastname,
        email,
        birthYear) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.birthYear = birthYear;
    }
    alter() {
        this.age =  2019 - this.birthYear;
        return this.age;
    }

}

// Person.prototype.alter = function () {
//    this.age =  2019 - this.birthYear;
//    return this.age;
// }

module.exports = Person;