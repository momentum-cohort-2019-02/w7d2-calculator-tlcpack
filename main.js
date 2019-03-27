// function makeJSButtons() {
//     let firstDiv = document.querySelector('#first');
//     let secondDiv = document.querySelector('#second');
//     let thirdDiv = document.querySelector('#third');
//     let fourthDiv = document.querySelector('#fourth');
//     let fifthDiv = document.querySelector('#fifth');

//     let cButton = document.createElement('button');
//     cButton.innerText = 'C';
//     let fieldButton = document.createElement('button');
//     fieldButton.innerText = '_empty_';

//     let sevenButton = document.createElement('button');
//     sevenButton.innerText = '7';
//     let eightButton = document.createElement('button');
//     eightButton.innerText = '8';
//     let nineButton = document.createElement('button');
//     nineButton.innerText = '9';
//     let divideButton = document.createElement('button');
//     divideButton.innerText = '/';

//     let fourButton = document.createElement('button');
//     fourButton.innerText = '4';
//     let fiveButton = document.createElement('button');
//     fiveButton.innerText = '5';
//     let sixButton = document.createElement('button');
//     sixButton.innerText = '6';
//     let timesButton = document.createElement('button');
//     timesButton.innerText = 'X';

//     let oneButton = document.createElement('button');
//     oneButton.innerText = '1';
//     let twoButton = document.createElement('button');
//     twoButton.innerText = '2';
//     let threeButton = document.createElement('button');
//     threeButton.innerText = '3';
//     let minusButton = document.createElement('button');
//     minusButton.innerText = '-';

//     let zeroButton = document.createElement('button');
//     zeroButton.innerText = '0';
//     let decimalButton = document.createElement('button');
//     decimalButton.innerText = '.';
//     let equalButton = document.createElement('button');
//     equalButton.innerText = '=';
//     let plusButton = document.createElement('button');
//     plusButton.innerText = '+';

//     firstDiv.appendChild(cButton);
//     firstDiv.appendChild(fieldButton);
//     secondDiv.appendChild(sevenButton);
//     secondDiv.appendChild(eightButton);
//     secondDiv.appendChild(nineButton);
//     secondDiv.appendChild(divideButton);
//     thirdDiv.appendChild(fourButton);
//     thirdDiv.appendChild(fiveButton);
//     thirdDiv.appendChild(sixButton);
//     thirdDiv.appendChild(timesButton);
//     fourthDiv.appendChild(oneButton);
//     fourthDiv.appendChild(twoButton);
//     fourthDiv.appendChild(threeButton);
//     fourthDiv.appendChild(minusButton);
//     fifthDiv.appendChild(zeroButton);
//     fifthDiv.appendChild(decimalButton);
//     fifthDiv.appendChild(equalButton);
//     fifthDiv.appendChild(plusButton);


// }

function clicking() {
    let field = document.querySelector('.field');
    
    let clear = document.querySelector('.clear');

    clear.addEventListener('click', function() {
        field.innerText = "";
        console.log("clear");
    });
    
    let one = document.querySelector('.one');

    one.addEventListener('click', function() {
        field.innerText += " 1 ";
        console.log("one");
    });

    let two = document.querySelector('.two');

    two.addEventListener('click', function() {
        field.innerText += " 2 ";
        console.log("two");
    });

    let three = document.querySelector('.three');

    three.addEventListener('click', function() {
        field.innerText += " 3 ";
        console.log("three");
    });

    let four = document.querySelector('.four');

    four.addEventListener('click', function() {
        field.innerText += " 4 ";
        console.log("four");
    });

    let five = document.querySelector('.five');

    five.addEventListener('click', function() {
        field.innerText += " 5 ";
        console.log("five");
    });

    let six = document.querySelector('.six');

    six.addEventListener('click', function() {
        field.innerText += " 6 ";
        console.log("six");
    });

    let seven = document.querySelector('.seven');

    seven.addEventListener('click', function() {
        field.innerText += " 7 ";
        console.log("seven");
    });

    let eight = document.querySelector('.eight');

    eight.addEventListener('click', function() {
        field.innerText += " 8 ";
        console.log("eight");
    });

    let nine = document.querySelector('.nine');

    nine.addEventListener('click', function() {
        field.innerText += " 9 ";
        console.log("nine");
    });

    let zero = document.querySelector('.zero');

    zero.addEventListener('click', function() {
        field.innerText += " 0 ";
        console.log("zero");
    });

    let divide = document.querySelector('.divide');

    divide.addEventListener('click', function() {
        field.innerText += " / ";
        console.log("divide");
    });

    let times = document.querySelector('.times');

    times.addEventListener('click', function() {
        field.innerText += " * ";
        console.log("zero");
    });

    let minus = document.querySelector('.minus');

    minus.addEventListener('click', function() {
        field.innerText += " - ";
        console.log("zero");
    });

    let plus = document.querySelector('.plus');

    plus.addEventListener('click', function() {
        field.innerText += " + ";
        console.log("zero");
    });

    let equal = document.querySelector('.equal');

    equal.addEventListener('click', function() {   
        let answer = eval(field.innerText);
        field.innerText = answer;
    })
}

clicking();

// document.addEventListener('DOMContentLoaded', main)