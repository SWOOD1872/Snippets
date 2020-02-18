let date = new Date();
let year = date.getFullYear(); // Year (YYYY)
let month = date.getMonth() + 1; // Month of the year (0-11)
let day = date.getDate(); // Day of the month (1-31)

if(month < 10) {
    month = `0${month}`;
}

if(day < 10) {
    day = `0${day}`;
}

let DB2Date = `${year}-${month}-${day}`;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = `0${date.getMilliseconds()}`;
let timestamp = `${hours}:${minutes}:${seconds}:${milliseconds}`;
let fullTimestamp = `${DB2Date}-${timestamp}`;