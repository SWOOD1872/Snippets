"use strict";

const person = {
    name: 'Sam',
    age: 20,
    height: 5.9
};

// For In - gets the keys (or indices) rather than the values
for(let prop in person) {
    console.log('KEY   : ' + prop); // Logs the keys in the person object literal
    console.log('VALUE : ' + person[prop]); // Logs the value of the key in the person object literal
}

// SUMMARY: For In gets the keys of an object rather than the value of the key, therefore extra code needs to
// be used to get the value.