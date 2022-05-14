// const form = document.querySelector('.form')
// const card = document.querySelector('.card')
const display = document.querySelector('.display')
const start = document.querySelector('#start')
const answer = document.querySelector('#answer')
// const message = document.querySelector(".def")
const input = document.querySelector('.input')
const vote = document.querySelector('#vote')
const box = document.querySelector('.box')
// const def = document.querySelector('.def')
let num,msg,age;

vote.addEventListener('click', ()=>{
    num = 1;
    box.classList.toggle('box')

})

input.addEventListener('submit', (p)=>{
    p.preventDefault();

    let reply = input.reply.value;

    display.innerHTML += `
    
    <h5 class="my-2" text-danger>
        ${reply}
    </h5>
    
    `;

    if (num == 1){
        msg = "Whats your age"
    } else if (num == 2) {
        if (Number(reply) > 18){
            msg = `<h5 class='text-end text-success'>Which political party do you support?</h5?`
        } else {
            box.innerHTML = `<h1 class="text-center text-danger">You cannot Vote!</h1>`
        }
    }


    answer.value =  ''

    setTimeout(()=>{
        display.innerHTML += `
            <h5 class="text-end my-2 text-danger">
                ${msg}
            </h5>
        `;
       
       },2000)
       num++;
})

// start.addEventListener('click',()=>{
//     num = 1;
//     card.classList.toggle('show')
   
// })
// form.addEventListener('submit',(e)=>{
//     // Prevent default submit action
//     e.preventDefault()

//     // Get reply from User 
//    let reply = form.reply.value

//     // Send it to our interface
    // console.log(display.innerHTML);
//    display.innerHTML += `
//         <h5 class="my-2 text-warning">
//             ${reply}
//         </h5> 
//    `;
    // if (num == 1) {
    //     msg = 'Whats your current temperature in F?'
    // }
    // else if(num == 2){
    //     if (Number(reply) > 98) {
    //         msg = 'When last did you take malaria drugs, Please provide a number?'
    //     }else{
    //         card.innerHTML = "<h1>You Do Not Have Malaria</h1>"
    //     }
    // }
//     else if(num == 3){
//         if (Number(reply) > 6) {
//             msg = 'Do you use mosquito nets, Yes or No?'
//         }else{
//             card.innerHTML = "<h1>You Do Not Have Malaria</h1>"
//         }
//     }
//     else if(num == 4){
//         if (reply.toLowerCase() === 'yes') {
//             card.innerHTML = '<h3>You might have malaria please take lumatem for 5 days and if symptoms persist please see a doctor</h3>'
//         }else{
//             card.innerHTML = "<h1 class=\"text-center\">You most definitely have malaria please see a doctor before its too late.</h1>"
//         }
//     }
//     // Return Input Field to empty values
    // answer.value =  ''

    // Reply the Users
//    setTimeout(()=>{
//     display.innerHTML += `
//         <h5 class="text-end my-2 text-danger">
//             ${reply}
//         </h5>
//     `;
   
//    },2000)
//     num++;
//     console.log(num);
   
// })