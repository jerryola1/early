const display = document.querySelector('.display')
const start = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')

let min,sec,timer;

start.addEventListener('click', ()=>{
    min = 4;
    sec = 60;
    timer = setInterval(()=>{
        sec--
        if (sec < 0) {
            sec = 59
            min --
        }

        if (min == 0 && sec == 0) {
            clearInterval(timer)
            display.innerHTML = `<h1 class="text-center text-light">Time Out</h1>`
        }

        display.innerHTML  = `
        <span class="d-inline text-info">5</span>
        <span class="text-success d-inline">:</span>
        <span class="text-warning">00</span>
        `;

        if (min == 0 && sec == 0) {
            display.innerHTML = `<h1 class ="text-center text-light">Time Out</h1>`
        }

    },1000)
})

stopBtn.addEventListener('click', ()=>{
    display.innerHTML = `
    <span class="d-inline text-info">5</span>
    <span class="text-success d-inline">:</span>
    <span class="text-warning">00</span>
    `;
    clearInterval(timer);

})


// Pasword hide and show

/*
Keyboard Events
keyup
keydown
keypress
*/

const pass = document.querySelector('#pass');
const  btn = document.querySelector('#hide')
const icon = document.querySelector('#icon')
const msg = document.querySelector('.msg')


btn.addEventListener('click', ()=>{
    icon.classList.toggle('fa-eye-slash')
    icon.classList.toggle('fa-eye')
    if (pass.type == 'password') {
        pass.type = 'text'
    } else{
        pass.type = 'password'
    }
})

pass.addEventListener('keydown', ()=>{
    if (pass.ariaValueMax.length < 9) {
        msg.classList.add('text-danger')
        msg.innerText = 'Weak password'
        pass.classList.add('bg-danger', 'text-light')
    } else{
            msg.classList.add('bg-success')
            pass.classList.remove('bg-danger')
            pass.classList.add('text-success')
            msg.innerText = 'Weak password'
    }

    setTimeout(() => {
        msg.innerText = ''
    }, 3000);
})