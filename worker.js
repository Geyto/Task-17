import {Person} from "./model.js";

export class Worker extends Person {
    #rate = 1000;
    #days = 0;

    constructor(name, lastName, birthday, position) {
        super(name, lastName, birthday);
        this.position = position;
    }

    set rate(value) {
        if (value < 1000) {
            console.log("Error rate param");
        } else {
            return this.#rate = value;
        }
    }

    addDays(value) {
        const nowDate = new Date();
        const days_in_month =32 - new Date(nowDate.getFullYear(), nowDate.getMonth(), 32).getDate()
        if (value > 0 && this.#days + value < days_in_month){
            this.#days += value;
        }
    }
    getSalary(){
        const birthday = this.birthday;
        let salary = this.#days * this.#rate;
        if (new Date(birthday).getMonth() === new Date().getMonth()){
            salary += salary * 0.1
        }
        return console.log(this.getFullName() + " " + salary + " рублей")
    }
    get daysWork(){
        return this.#days
    }
    static whoWorkedMore(array){
        const max = array.sort((a, b) => b.daysWork - a.daysWork)[0];
        //не фильтрует массив возвращает пустой
        // const bestWorker = array.filter(item =>{
        //     item.daysWork === max.daysWork;
        // });
        return console.log(`Больше всех отработал ${max.getFullName()}. Количество рабочих дней - ${max.daysWork}`)
    }
    static whoIsYounger(array){
        const max = array.sort((a, b) => parseInt(a.getAge().match(/\d+/)) - parseInt(b.getAge().match(/\d+/)))[0];
        //не фильтрует массив возвращает пустой
        // const younger = array.filter(item =>{
        //     parseInt(item.getAge().match(/\d+/)) === parseInt(max.getAge().match(/\d+/))
        // });
        return console.log(`Самый молодой сотрудник ${max.getFullName()}. ${max.getAge()}`)
    }
}