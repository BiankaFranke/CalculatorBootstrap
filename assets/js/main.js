// JS Check
// console.log('it works');

// Declaration
let calculator = document.getElementById('result');
let history = document.getElementById("resultHistory");
// let buttons = Array.from(document.getElementsByClassName('button'));


// Other example with single functions

let del = (event) => {
    calculator.innerText = '';
    history.innerText = '';
    console.log('clear');
};

let output = (event) => {
    calculator.innerText += event;
    history.innerText += event;
    console.log(event);
};

let calculate = (event) => {
    calculator.innerText = eval(calculator.innerText);
    history.innerText = eval(calculator.innerText);
};

let back = (event) => {
    calculator.innerText = calculator.innerText.slice(0,-1);
    history.innerText  = history.innerText.slice(0,-1);
};


// First try without bootstrap and without single functions, switch Statements

// buttons.map(button => {
//     button.addEventListener('click', (event) => {
//         switch(event.target.innerText) {
//             case 'c':
//                 calculator.innerText = '';
//                 history.innerText = '';
//                 break;
//             case '=':
//                 calculator.innerText = eval(calculator.innerText);
//                 history.innerText = eval(calculator.innerText);
//                 break;
//             case '←':
//                 calculator.innerText = calculator.innerText.slice(0,-1);
//                 history.innerText  = history.innerText.slice(0,-1);
//                 break;
//             default:
//                 calculator.innerText += event.target.innerText;
//                 history.innerText += event.target.innerText;
//         } 
//     });
// });