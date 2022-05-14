const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn-outline-dark');
const clearAll = document.querySelector('#ce');
const del = document.querySelector('#del')
const equal = document.querySelector('#equal')
const pi = document.querySelector('#pi')
const sq = document.querySelector('#sq')
const sin = document.querySelector('#sin')
const cos = document.querySelector('#cos')
const tan = document.querySelector('#tan')
const log2 = document.querySelector('#log')
const squ = document.querySelector('#squ')

let text;

// let mathpi = Math.PI;
// console.log(mathpi);

//Place an event listner on all the buttons

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // When the user push the .btn
        if (btn.innerText == '.') {
            display.innerText += btn.innerText
        } 

        // When the display starts with 0
        else if (display.innerText == '0' || display.innerText == 'Error') {
            display.innerText = ''
            display.innerText += btn.innerText
        } else{
            display.innerText += btn.innerText
        }
    })
})
// Clear all screen

clearAll.addEventListener('click', ()=>{
    display.innerText = ('0')
})

//Delete Button

del.addEventListener('click', ()=>{
    display.innerText = display.innerText.slice(0, -1)
    if (display.innerText.lenght < 1) {
        display.innerText = '0'
    }
})

//Euall Button

equal.addEventListener('click', ()=>{
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
})

pi.addEventListener('click', ()=>{
    display.innerText = Math.PI * (display.innerText);

    //  if (display.innerText = 'NaN') {
    //     display.innerText = '0'
    // }
})

sq.addEventListener('click', ()=>{
    let text = display.innerText
    display.innerText = Math.sqrt(display.innerText)
})