function makeJSButtons() {
    let firstDiv = document.querySelector('#first');
    let secondDiv = document.querySelector('#second');
    let thirdDiv = document.querySelector('#third');
    let fourthDiv = document.querySelector('#fourth');
    let fifthDiv = document.querySelector('#fifth');

    let cButton = document.createElement('button');
    cButton.innerText = 'C';
    let fieldButton = document.createElement('button');
    fieldButton.innerText = '_empty_';

    let sevenButton = document.createElement('button');
    sevenButton.innerText = '7';
    let eightButton = document.createElement('button');
    eightButton.innerText = '8';
    let nineButton = document.createElement('button');
    nineButton.innerText = '9';
    let divideButton = document.createElement('button');
    divideButton.innerText = '/';

    let fourButton = document.createElement('button');
    fourButton.innerText = '4';
    let fiveButton = document.createElement('button');
    fiveButton.innerText = '5';
    let sixButton = document.createElement('button');
    sixButton.innerText = '6';
    let timesButton = document.createElement('button');
    timesButton.innerText = 'X';

    let oneButton = document.createElement('button');
    oneButton.innerText = '1';
    let twoButton = document.createElement('button');
    twoButton.innerText = '2';
    let threeButton = document.createElement('button');
    threeButton.innerText = '3';
    let minusButton = document.createElement('button');
    minusButton.innerText = '-';

    let zeroButton = document.createElement('button');
    zeroButton.innerText = '0';
    let decimalButton = document.createElement('button');
    decimalButton.innerText = '.';
    let equalButton = document.createElement('button');
    equalButton.innerText = '=';
    let plusButton = document.createElement('button');
    plusButton.innerText = '+';

    firstDiv.appendChild(cButton);
    firstDiv.appendChild(fieldButton);
    secondDiv.appendChild(sevenButton);
    secondDiv.appendChild(eightButton);
    secondDiv.appendChild(nineButton);
    secondDiv.appendChild(divideButton);
    thirdDiv.appendChild(fourButton);
    thirdDiv.appendChild(fiveButton);
    thirdDiv.appendChild(sixButton);
    thirdDiv.appendChild(timesButton);
    fourthDiv.appendChild(oneButton);
    fourthDiv.appendChild(twoButton);
    fourthDiv.appendChild(threeButton);
    fourthDiv.appendChild(minusButton);
    fifthDiv.appendChild(zeroButton);
    fifthDiv.appendChild(decimalButton);
    fifthDiv.appendChild(equalButton);
    fifthDiv.appendChild(plusButton);


}

function clicking() {
    let button  = document.querySelectorAll('button');

    button.addEventListener('click', function() {
        button.innerHTML = "test";
        console.log("test");
    });
}

clicking();