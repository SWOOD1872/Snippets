"use strict";

function dayName(dayNum) {
    let day = '';

    switch(dayNum) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = undefined;
    }

    return day;
}

let t1 = dayName(1);
console.log(t1);
let t2 = dayName(2);
console.log(t2);

// If you don't have the 'break' statement, the next case will get evaluated