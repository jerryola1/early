// // Variables

// let age = 18
// let boy,girl;
// console.log(age);

// const me = 2
// console.log(me);

// // Data Types

// let integers = 1;
// let float = 22.0;
// // let string = "This is a boy";
// let string = 'This is\'nt a boy';

// console.log (string);

// let boolean = true;

// let students = ['John', 300, 339.2, false]
// console.log(students);

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[3]);

// //Operators

// let num1 = 10;
// let num2 = 70;
// const num3 = 5;

// // answer = num1 + num2;
// // answer = num1 - num2;

// num1 += num3;
// num1 /- num3;
// console.log(num1);

// Conditional statement

// if(num1 === '10'){
//     console.log(num1);
// }

// else if(num1 == 12){
//     console.log("Else If");
// }

// else{
//     console.log("This is not 10");
// }

// ====================================================================================

// let principal,rate,time,sI,duration,appraisal;
// const divNum = 100;

// principal = prompt('Enter Principal Value');
// rate = prompt('Enter Rate %');
// time = prompt('Enter Time of Investment');

// if(time == 1){
//     duration = 'Year';
// } else{
//     duration = 'Years'
// }

// sI = (principal * rate * time)/divNum;

// if (sI < 1000) {
//     appraisal = "You can do better, your principal is ";
// } else if(sI < 5000){
//     appraisal = "You are almost there, your principal is ";
// } else {
//     appraisal = "You tried this time, your principal is ";
// }

// if (sI < 1000) {
//     alert("Your interest with principle: ₦"+principal+" at a rate of "+rate+"%, within time of "+time+" "+duration+" is ₦"+sI);
// } else if (sI < 5000){
//     alert(appraisal +"₦"+sI);
// } else {
//     alert(appraisal +"₦"+sI);
// }

// ====================================================================================

// let age,names,votes;

// alert("welcome to my online voting system");

// names = prompt("Enter Your Name");
// age = prompt('Enter your age');

// if (names == "john doe") {
//     alert("you are not allowed to vote");
// } else {
//     prompt('enter your age');
// }
// if (age <= 17){
//     alert('You are too young to vote');
// } else {
//     alert('Your vote count successfully');
// }

// ====================================================================================

// let age,names,yob,time;

// alert('Welcome to my age calculator');

// names = prompt('Enter your name');
// year = prompt('Enter current year');
// yob = prompt('Please enter your year of birth');
// age = (year - yob);

// if (age == 1) {
//     time = 'Year'
// } else{
//     time = 'Years'
// }

// alert(names + ' You are ' + age + ' ' + time + ' old');

// if (age < 5) {
//     alert('You are a toddler at age '+ age);
// } else if (age <= 12){
//     alert('You are a kid at '+age);
// } else if (age <= 19) {
//     alert('You are a teenager at age ' + age);
// } else if (age <= 35) {
//     alert('You are a youth at age ' + age);
// } else{
//     alert('You are a senior man at age ' + age);
// }

// ====================================================================================

// let save = "Mission";

// save = save.toUpperCase();

// console.log(save);

// let save = '0123456789';
// let answer = save.slice(3,7);

// let show = save.slice(0,3)+'####'+save.slice(7,10);

// let guess = prompt(
//     `Guess the missing numbers ${show} that is hidden`
// );

// alert (`The answer is ` + answer);

// if (guess === answer) {
//     alert('Correct');
// }

// let nos,reg;
// nos = [];
// nos.push(prompt('Enter name of student'));
// reg = nos;

// for (n = 0; n < 1; n++){
//     let fname = prompt('Enter First name')
//     let lname = prompt('Enter last name')
//     nos.push(fname +  ' ' + lname)

//     if (fname == lname) {
//         alert('First name exist')
//     } else ('')
// };

// student.push('Man');

// console.log(student);

// if (student.includes('Jerry')){
//     alert('Jerry is already registered')
// } else{
//     prompt('Enter name again')
// };

//  register = prompt ('Plase enter name of student');

// alert ('Name of student is ' + nos);
//  student = nos.push(register);

// alert (nos);


//  alert('Name of student is ' + nos);

// =============================================================================================

// let userName = prompt('Enter username')
// let userAge = prompt('Enter age');

// let user = {
//     name: userName,
//     age: userAge
// }

//  userName = prompt('Enter username')
//  userAge = prompt('Enter age');

// user = {
//     name: userName,
//     age: userAge
// }


//  userName = prompt('Enter username')
// userAge = prompt('Enter age');

//  user = {
//     name: userName,
//     age: userAge
// }


// let studentReg = []

// studentReg.push(user)

// console.log(user);

// =============================================================================================

// let letters = ['Good', '5656', 'Worst'];

// let string = 'image.jpg';
// console.log(string.split('.'));
// console.log(letters.join(':'));
// console.log(letters.toString());

// =============================================================================================

// let num = 20.987;

// console.log(Math);
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(Math.abs(num));
// console.log(Math.pow(num,3));

// =============================================================================================

// let x,y;
// y = 2;
// x = 7 - 4;


// let y = 2;
// let x = 7 - (2*y);
// console.log(x);

// let r = 6;

// let area = Math.PI * Math.pow(r,2);
// area = area.toFixed(4);
// console.log(area);

// =============================================================================================

// let num = Math.random() * 5;
// num = Math.floor(num) + 1;

// console.log(num);

// cases

// let num = 4;

// switch(num){
//     case 2: console.log('Number 2');
//     break
//     case 3: console.log('Number 3');
//     break
//     case 4: console.log('Number 4')
//     break
//     default: console.log('Number not found');
// }

// loop

// let num = 0;

// for(i = 0; i < 100; i++ ){
//     console.log(num += 1);
// }

// while(num < 5){
//     console.log(num += 1);
// }


// function 

// function stat(){
//     let num = 5;
//     let num1 = 10

//     let answer = num + num1;
//     console.log(answer);
// }

// function greeting(name){
//     alert('Welcome ' + name)

// }

// function wave(name,time){
//     alert(`Good bye ${name} see you ${time}`)
// }

// let user = prompt('please enter name');
// greeting(user);
// wave(user, '12pm');

// const wave = (name,time)=> {
//     alert(`Good bye ${name} see you ${time}`)
// }

// let user = prompt('please enter name');
// greeting(user)
// wave(user,12);

// const students = ['jerry', 'John', 'Jill', 'Jane'];
// students.forEach((me,we)=>{
//     if (me === 'John') {
//         console.log(me + ' Come for class tomorrow');
//         console.log(we);
//     } else{
//         console.log(me + ' do not come for class tomorrow');
//         console.log(we);
//     }
// });


// =============================================================================================

// let item = document.getElementById('two');
// item = document.querySelector('h1')
// // item = document.getElementsByClassName('one');
// // item = document.getElementsByTagName('h2');

// // item = document.querySelector('#two');
// // item = document.querySelectorAll('h1');

// item.style.backgroundColor = 'blue';

// console.log(item.innerHTML);


