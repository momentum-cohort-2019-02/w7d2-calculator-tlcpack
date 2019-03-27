
function clicking() {
    let field = document.querySelector('.field');
    
    let clear = document.querySelector('.clear');

    clear.addEventListener('click', function() {
        field.innerText = "";
        console.log("clear");
    });
    
    let one = document.querySelector('.one');

    one.addEventListener('click', function() {
        field.innerText += "1";
        console.log("one");
    });

    let two = document.querySelector('.two');

    two.addEventListener('click', function() {
        field.innerText += "2";
        console.log("two");
    });

    let three = document.querySelector('.three');

    three.addEventListener('click', function() {
        field.innerText += "3";
        console.log("three");
    });

    let four = document.querySelector('.four');

    four.addEventListener('click', function() {
        field.innerText += "4";
        console.log("four");
    });

    let five = document.querySelector('.five');

    five.addEventListener('click', function() {
        field.innerText += "5";
        console.log("five");
    });

    let six = document.querySelector('.six');

    six.addEventListener('click', function() {
        field.innerText += "6";
        console.log("six");
    });

    let seven = document.querySelector('.seven');

    seven.addEventListener('click', function() {
        field.innerText += "7";
        console.log("seven");
    });

    let eight = document.querySelector('.eight');

    eight.addEventListener('click', function() {
        field.innerText += "8";
        console.log("eight");
    });

    let nine = document.querySelector('.nine');

    nine.addEventListener('click', function() {
        field.innerText += "9";
        console.log("nine");
    });

    let zero = document.querySelector('.zero');

    zero.addEventListener('click', function() {
        field.innerText += "0";
        console.log("zero");
    });

    let divide = document.querySelector('.divide');

    divide.addEventListener('click', function() {
        field.innerText += "/";
        console.log("divide");
    });

    let times = document.querySelector('.times');

    times.addEventListener('click', function() {
        field.innerText += "*";
        console.log("times");
    });

    let minus = document.querySelector('.minus');

    minus.addEventListener('click', function() {
        field.innerText += "-";
        console.log("minus");
    });

    let plus = document.querySelector('.plus');

    plus.addEventListener('click', function() {
        field.innerText += "+";
        console.log("plus");
    });

    // let decimal = document.querySelector('.decimal');

    // decimal.addEventListener('click', function() {
    //     field.innerText += ".";
    //     console.log(".");
    // });

    let equal = document.querySelector('.equal');

    equal.addEventListener('click', function() {   
        field.innerText = eval(field.innerText);
        console.log(field.innerText);
    })
}

clicking();

// document.addEventListener('DOMContentLoaded', main)