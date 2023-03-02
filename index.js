
// let name = 'Mosh';
// console.log(name);

//primitive value types in javascript
/*
let name = 'Mosh';  //string literal
let age = 30;  //Number literal
let isApproved = false;  //Boolean literal
let firstName = undefined;
let selectedColor = null;

console.log(typeof isApproved);
console.log(typeof firstName);
console.log(typeof selectedColor);
*/

// let person = {
//     name: 'Mosh',
//     age: 30
// };

// console.log(typeof person);
// console.log(person);
// console.log(person.age);

/*

// Dot Notation
person.name = 'john';
console.log(person.name);

// Bracket Notation
person['name'] = 'Mary';
console.log(person.name);
*/

/*
let selectedColors = ['red','blue' ];
selectedColors[2] = 'black';
console.log(selectedColors);
console.log(selectedColors[0]);
*/

/*
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greet('john', 'smith');

//calculate a value
function square(number) {
    return number * number;
}

console.log(square(2));
*/





function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if(h == 0) {
        h = 12;
    }

    if(h > 12) {
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}
showTime();



