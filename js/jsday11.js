// Keys
const doKey = document.querySelector('#do-key')
const dbKey = document.querySelector('#db')
const reKey = document.querySelector('#re-key')
const rbKey = document.querySelector('#rb')
const miKey = document.querySelector('#mi-key')
const faKey = document.querySelector('#fa-key')
const fbKey = document.querySelector('#fb')
const soKey = document.querySelector('#so-key')
const sbKey = document.querySelector('#sb')
const laKey = document.querySelector('#la-key')
const tiKey = document.querySelector('#ti-key')
const tbKey = document.querySelector('#tb')
const dohKey = document.querySelector('#doh-key')


// Secondary Keys

// Sounds
const doSound = document.querySelector('#do-sound')
const dbSound = document.querySelector('#db-sound')
const reSound = document.querySelector('#re-sound')
const rbSound = document.querySelector('#rb-sound')
const miSound = document.querySelector('#mi-sound')
const faSound = document.querySelector('#fa-sound')
const fbSound = document.querySelector('#fb-sound')
const soSound = document.querySelector('#so-sound')
const sbSound = document.querySelector('#sb-sound')
const laSound = document.querySelector('#la-sound')
const tiSound = document.querySelector('#ti-sound')
const tbSound = document.querySelector('#tb-sound')

// Functions
doKey.addEventListener('click',()=>{
    doSound.play()
})
dbKey.addEventListener('click',()=>{
    dbSound.play()
})
reKey.addEventListener('click',()=>{
    reSound.play()
})
rbKey.addEventListener('click',()=>{
    rbSound.play()
})
miKey.addEventListener('click',()=>{
    miSound.play()
})
faKey.addEventListener('click',()=>{
    faSound.play()
})
fbKey.addEventListener('click',()=>{
    fbSound.play()
})
soKey.addEventListener('click',()=>{
    soSound.play()
})
sbKey.addEventListener('click',()=>{
    sbSound.play()
})
laKey.addEventListener('click',()=>{
    laSound.play()
})
tiKey.addEventListener('click',()=>{
    tiSound.play()
})
tbKey.addEventListener('click',()=>{
    tbSound.play()
})
dohKey.addEventListener('click',()=>{
    doSound.play()
})

const body = document.querySelector('body');
body.addEventListener('keydown',(e)=>{
    if (e.key == 'a' ) {
        doSound.play()
        
        console.log(dbSound.audioTrack);
    }
    else if(e.key == 'w' ){
            dbSound.play()
    }
    else if(e.key == 's' ){
        reSound.play()
    } 
     else if(e.key == 'e' ){
            rbSound.play()
    }
     else if(e.key == 'd' ){
            miSound.play()
    } 
     else if(e.key == 'f' ){
            miSound.play()
    }
     else if(e.key == 'g' ){
            faSound.play()
    }
     else if(e.key == 't' ){
            fbSound.play()
    }
     else if(e.key == 'h' ){
            soSound.play()
    }
     else if(e.key == 'y' ){
            sbSound.play()
    }
     else if(e.key == 'j' ){
            laSound.play()
    }
     else if(e.key == 'k' ){
            tiSound.play()
    }
     else if(e.key == 'i' ){
            tbSound.play()
    }
     else if(e.key == 'l' ){
            doSound.play()
    }
    else{
        alert(`Please Use lowercase keys. Flat Sounds are "a,s,d,f,g,h,j,k,l", while sharp sounds are "w,e,t,y,i"`)
    }
})
