// const currentYear = new Date();

// let userYear = prompt('Enter your year of birth')
// const prevYear = new Date(userYear)
// let oldTimestamp = prevYear.getTime()
// let currentTimestamp = currentYear.getTime()
// console.log(oldTimestamp,currentTimestamp);


// let timeStamp = currentTimestamp - oldTimestamp

// let sec = timeStamp/1000;
// let min = Math.floor(sec/60);
// let hr = Math.floor(min/60);
// let day = Math.floor(hr/24);
// let weeks = Math.floor(day/7)
// let months = Math.floor(weeks/4)
// let years = Math.floor(day/365)
// alert(
//     `You have spent ${day} days, ${months} months  and ${years} years on Earth `
// )
const display = document.querySelector('.display');


const time = setInterval(()=>{
    const now = new Date()

    let year = now.getFullYear();
    let month = now.getMonth() +1
    let dayofWeek = now.getDay();
    let day = now.getDate();
    let amp;
    let hr =  now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let millisecond = now.getMilliseconds();
    
    if(hr < 12){
        amp = 'AM'
    }else{
        hr -= 12
        amp = 'PM'
    }
    display.innerHTML = `
        <div class="card one text-center fs-1 p-4 mx-auto">
            ${hr}
        </div> 
        <span class="text-light pp fs-1 pt-3">:</span>
        <div class="card two text-center fs-1 p-4 mx-auto">
            ${min}
        </div>
        <span class="text-light pp fs-1 pt-3">:</span>
        <div class="card three text-center fs-1 p-4 mx-auto">
           <span class="slide"> ${sec}</span>
        </div>
        <span class="text-light pp fs-1 pt-3">:</span>
        <div class="card text-center fs-1 p-2 pt-4 mx-auto">
            ${amp}
        </div>
    
    `;

},1000)
