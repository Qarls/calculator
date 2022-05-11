const buttonCodes = [
    ' ',
    ' ',
    ' ',
    'AC',
    '<-',
    '9',
    '8',
    '7',
    ' ',
    '+',
    '6',
    '5',
    '4',
    ' ',
    '-',
    '3',
    '2',
    '1',
    ' ',
    '*',
    '.',
    '0',
    ' ',
    ' ',
    '=',
]
function makeGrid () {
    const calcWindow = document.querySelector("#calc-main");
    
    for (let i=0; i<4; i++) {
        
        const row = document.createElement('div');
        calcWindow.appendChild(row);
        row.classList.add('row');
        row.setAttribute('id', `${i}`);
        
        for (let j=0; j<5; j++) {
            const button = document.createElement('button');
            row.appendChild(button);

            
        } 
        const buttons = document.querySelectorAll('button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute('id', buttonCodes[i]);
            buttons[i].textContent = buttonCodes[i];
        }
    }

    


}

makeGrid();