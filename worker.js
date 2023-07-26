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
        const currentMonth = new Date(nowDate.getFullYear(), nowDate.getMonth()+1, 0);
        const total = currentMonth.getDate();
        if (value > 0 && this.#days + value < total){
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
        const bestWorkers = array.filter(item =>{
            return  item.daysWork === max.daysWork;
        });
        if (bestWorkers.length === 1){
            return console.log(`Больше всех отработал ${max.getFullName()}. Количество рабочих дней - ${max.daysWork}`)
        } else {
            return console.log(`Больше всех отработали ${getNameList(bestWorkers)}. Количество рабочих дней - ${max.daysWork}`)
        }

    }
    static whoIsYounger(array){
        const max = array.sort((a, b) => parseInt(a.getAge().match(/\d+/)) - parseInt(b.getAge().match(/\d+/)))[0];
        const younger = array.filter(item =>{
            return parseInt(item.getAge().match(/\d+/)) === parseInt(max.getAge().match(/\d+/))
        });
        if (younger.length === 1){
            return console.log(`Самый молодой сотрудник ${max.getFullName()}. ${max.getAge()}`)
        } else {
            return console.log(`Самый молодые сотрудники ${getNameList(younger)}. ${max.getAge()}`)
        }

    }
}
function getNameList (array){
    let listName = null;
    for (let i = 0; i < array.length; i++){
        if (listName === null){
            listName = array[i].getFullName()
        } else {
            listName +=', ' + array[i].getFullName();
        }
    }
    return listName
}