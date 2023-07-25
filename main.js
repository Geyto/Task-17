import {Person} from "./model.js";
import {Worker} from "./worker.js";

const personal = [
    ['Roman', 'Geyto', "03.11.2000", 'front'],
    ['Andrey', 'Petrov', "02.01.1986", 'back'],
    ['Anna', 'Voronina', "10.23.1998", 'des'],
    ['Maria', 'Star', "07.13.1999", 'HR'],
    ['Nikolay', 'Boyko', "08.20.1984", 'TeamLeader'],
]

let work = [];

personal.forEach(item =>{
    let workers = new Worker(item[0], item[1], item[2], item[3], );
    work.push(workers);

})
work[0].addDays(23);
work[2].addDays(6);
work[1].addDays(12);
work[1].addDays(3);
work[2].addDays(10);
work[2].addDays(30);
work[3].addDays(5);
work[3].addDays(-2);
work[4].addDays(12);
work[4].addDays(12);
work[0].rate = 1200;
work[1].rate = 1350;
work[4].rate = 1500;
work.forEach(item => item.getSalary())
Worker.whoWorkedMore(work);
Worker.whoIsYounger(work);





