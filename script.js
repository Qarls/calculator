//rows of 5 buttons each
const buttonCodes = {
    //row 0
    0:'blank',
    1:'blank',
    2:'blank',
    3:'AC',
    4:'<-',
    //row 1
    5:'9',
    6:'8',
    7:'7',
    8:'blank',
    9:'+',
    //row 2
    10:'6',
    11:'5',
    12:'4',
    13:'blank',
    14:'-',
    //row 3
    15:'3',
    16:'2',
    17:'1',
    18:'blank',
    19:'*',
    //row 4
    20:'.',
    21:'0',
    22:'blank',
    23:'blank',
    24:'=',
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
            if (buttonCodes[i] == 'blank') {
                buttons[i].textContent = ' ';
                continue;
            }
            else {
                buttons[i].setAttribute('id', buttonCodes[i]);
                buttons[i].textContent = buttonCodes[i];
            }
        }
    }
}

function add(numA, numB) {

    let sum = Number(numA) +Number(numB);
    return sum;

}

const calcDisplay = document.querySelector('#display');
let onDisplay = 0;
let mem = undefined;
let mem2 = undefined;
calcDisplay.textContent = onDisplay;


makeGrid();
const onNumberClick = window.addEventListener('click', (event) => {
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
    
})
