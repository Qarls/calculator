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
    22:[' ', 'blank'],
    23:[' ', 'blank'],
    24:['=', 'equals'],
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
}

function operate (operationType) {

    const operationHandler = window.addEventListener('click', (event) => {
        if (isNaN(parseInt(event.target.id))) {
            return 0;
        }
        else {
            functions[operationType]();
        }
    });

}
function add() {
    let sum = Number(calcMemory) + Number(displayValue);
    calcDisplay.textContent = sum;
    calcMemory = sum;
    


}

//draw the calculator in-browser
makeGrid(); 

//the display of the calculator
const calcDisplay = document.querySelector('#display');

let calcMemory = 0;
let displayValue = 0;

let pressedButtonId;
//stores the 
const classPressed = 'pressed';

clearCalc();
//used here to draw a '0' to the display

const eventHandler = window.addEventListener('click', (event) => {
    if (isNaN(parseInt(event.target.id))) {
        const activeButton = document.querySelector(`#${event.target.id}`);
        pressedButtonId = activeButton.id;
        calcMemory = displayValue;
        operate(pressedButtonId);
        

            


        //activeButton is a string corresponding to the buttonCodes object
        console.log(event.target.id);
        //operate(event.target.id);


    }
    else {
        printToDisplay(event.target.textContent)
    }

});


    /*
    if (event.target.id == 'row') {
        return 0;
    }
    else if (event.target.id === 'AC') {
        mem = undefined;
        mem2 = undefined;
        onDisplay = 0;
        calcDisplay.textContent = 0;
    }
    else if (event.target.id === '+') {
        console.log(event.target.id);
        if (mem === undefined) {
            mem = onDisplay; 
            onDisplay = 0;
            calcDisplay.textContent = onDisplay;
        }
        else {
            onDisplay = add(onDisplay, mem);
            mem = onDisplay;
            calcDisplay.textContent = onDisplay;
            onDisplay = 0;
        }
    }

    else if (onDisplay !== 0) {
        onDisplay = `${onDisplay}${event.target.id}`;
        calcDisplay.textContent = onDisplay;
    }
    else {
        onDisplay = `${event.target.id}`;
        calcDisplay.textContent = onDisplay;
    }
    
})*/

//test comment
