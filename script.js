//rows of 5 buttons each
const buttonCodes = {
    //row 0
    0:[' ', 'blank'],
    1:[' ', 'blank'],
    2:[' ', 'blank'],
    3:['AC', 'AC'],
    4:['<-', '<-'],
    5:[9, '9'],
    6:[8, '8'],
    7:[7, '7'],
    8:[' ', 'blank'],
    9:['+','add'],
    10:[6, '6'],
    11:[5, '5'],
    12:[4, '4'],
    13:[' ', 'blank'],
    14:['-', 'subtract'],
    15:[3, '3'],
    16:[2, '2'],
    17:[1, '1'],
    18:[' ', 'blank'],
    19:['*', 'multiply'],
    20:['.', 'dot'],
    21:[0, '0'],
    22:['=', 'equals'],
    23:[' ', 'blank'],
    24:['/', 'divide'],
}


function makeGrid () {
    const calcWindow = document.querySelector("#calc-main");
    
    for (let i=0; i<5; i++) {
        
        const row = document.createElement('div');
        calcWindow.appendChild(row);
        row.classList.add('row');
        row.setAttribute('id', `row`);
        
        for (let j=0; j<5; j++) {
            const button = document.createElement('button');
            row.appendChild(button);

            
        } 
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
                let temp = buttonCodes[i];
                buttons[i].setAttribute('id', temp[1]);
                buttons[i].textContent = temp[0];
                console.log(temp[0]);
        }
    }
}

function clearCalc () {

    calcDisplay.textContent = 0;
    calcMemory = 0;
    displayValue = 0;
    const pressedButtonsAll = document.querySelectorAll('.pressed');
    for (button of pressedButtonsAll) {
        try {
            button.classList.remove(classPressed);
        }
        finally {
            continue
        }

    }
    


}
function clearDisplay () {
    calcDisplay.textContent = 0;
}

function printToDisplay (number) {

    if (calcDisplay.textContent == 0) {
        calcDisplay.textContent = `${number}`;

    }
    else if (pressedButtonId) {
        calcDisplay.textContent = `${number}`;
        pressedButtonId = undefined;

    }
    else {
        calcDisplay.textContent = `${calcDisplay.textContent}${number}`;
    }
    displayValue = Number(calcDisplay.textContent);

}

function readDisplay () {

    calcMemory1 = Number(calcDisplay.textContent);

}

function clearDisplay () {//possible redundancy

    calcDisplay.textContent = 0;

}

const functions = {
    AC: clearCalc,
    add: add,
    subtract: subtract,
}

function operate (operationType) {


    const operationHandler = window.addEventListener('click', (event) => {

        try {
            functions[operationType]();
            calcMemory = displayValue;

        }
        catch (TypeError) {
            return 0;
        }
        
    });

}
function add() {

    let sum = Number(calcMemory) + Number(displayValue);
    calcDisplay.textContent = sum;
    calcMemory = sum;

}

function subtract () {

    let diff = Number(calcMemory) - Number(displayValue);
    calcDisplay.textContent = diff;
    calcMemory = diff;
}

makeGrid(); 

const calcDisplay = document.querySelector('#display');

let calcMemory = 0;
let displayValue = 0;

let pressedButtonId;
const classPressed = 'pressed';

clearCalc();
