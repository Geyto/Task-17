export class Person {
    #birthday = new Date();

    constructor(name, lastName, birthday) {
        this.firstName = name;
        this.lastName = lastName;
        this.#birthday = birthday;
    }

    get birthday() {
        return this.#birthday;
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }

    getAge() {
        const bd = new Date(this.birthday);
        const ageInMs = Date.now() - bd.getTime();
        const ageInDate = new Date(ageInMs);
        const age =ageInDate.getUTCFullYear() - 1970;
        if (age % 10 === 1 ){
            return age + ' год';
        } else if (age % 10 === 2 || 3 || 4){
            return age + ' года';
        } else {
            return age + ' лет';
        }
    }
}