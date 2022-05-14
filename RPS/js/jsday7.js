const start = document.querySelector('#startGame');
const play = document.querySelector('#play');
const display = document.querySelector('.display');

let player1,player2;
start.addEventListener('click',()=>{
    start.classList.add('d-none');
    play.classList.remove('d-none');
    player1 = prompt('Enter Player 1 Name');
    player2 = prompt('Enter Player 2 Name');
    

    display.innerHTML = `
    <h5 class="text-center text-warning notif mb-3">Lets Play</h5>

    <div class="d-flex justify-content-between">
        <div>
            <h5 class="text-primary text-center">${player1}</h5>
            <img src="images/1.png" alt="" style="height: 150px;">
        </div>
        <div>
            <h5 class="text-primary text-center">${player2}</h5>
            <img src="images/1.png" alt="" style="height: 150px;">
        </div>
    </div>
    `;
})

play.addEventListener('click',()=>{
    let num1,num2,notif;
    num1 = Math.floor(Math.random() * 3)+ 1;
    num2 = Math.floor(Math.random() * 3)+ 1;

    if (num1 == 1 && num2 == 2) {
        notif = player2+' Wins';
    }
    else if (num1 == 1 && num2 == 3) {
        notif = player1+' Wins';
    }

    else if (num1 == 2 && num2 == 1) {
        notif = player1+' Wins';
    }
    else if (num1 == 2 && num2 == 3) {
        notif = player2+' Wins';
    }
    else if (num1 == 3 && num2 == 1) {
        notif = player2+' Wins';
    }
    else if (num1 == 3 && num2 == 2) {
        notif = player1+' Wins';
    }
    // For Player 2
    else if (num1 == 2 && num2 == 1) {
        notif = player1+' Wins';
    }
    else if (num1 == 3 && num2 == 1) {
        notif = player2+' Wins';
    }

    else if (num1 == 1 && num2 == 2) {
        notif = player2+' Wins';
    }
    else if (num1 == 3 && num2 == 2) {
        notif = player1+' Wins';
    }
    else if (num1 == 1 && num2 == 3) {
        notif = player1+' Wins';
    }
    else if (num1 == 2 && num2 == 3) {
        notif = player2+' Wins';
    }else{
        notif = '...DRAW...';
    }


    display.innerHTML = `
    <h5 class="text-center text-warning notif mb-3">${notif}</h5>

    <div class="d-flex justify-content-between">
        <div>
            <h5 class="text-primary text-center">${player1}</h5>
            <img src="images/${num1}.png" alt="" style="height: 150px;">
        </div>
        <div>
            <h5 class="text-primary text-center">${player2}</h5>
            <img src="images/${num2}.png" alt="" style="height: 150px;">
        </div>
    </div>
    `;
})

