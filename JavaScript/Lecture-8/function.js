// console.log('function');

/*

1.function
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

2.DOM/BOM
3.localStorage
4.calculator app
5.todoApp



*/


// function add(para1=2,para2=4){
//     let sum=para1+para2;
//     console.log(sum);
// };


// // add(20,30)//calling function/invoking function
// add(30,40);


// function mul(){
//     let a=20;
//     let b=30;
//     let mul=a*b;
//     console.log(mul);
// }

// mul(30,40);


//wap to find a prime number using function


//arrow function

// const primeNumber =(number)=>{

//     let count=0;

//     for(let i=1;i<=number;i++){

//         if(number%i==0){
//             count++;
//         }

//     }

//     if(count==2){
//         console.log('It is a prime number');
//     }
//     else{
//         console.log('It is not a prime number!');
//     }




// }




//normal function


// function primeNumber(number){


//     let count=0;

//     for(let i=1;i<=number;i++){

//         if(number%i==0){
//             count++;
//         }

//     }

//     if(count==2){
//         console.log('It is a prime number');
//     }
//     else{
//         console.log('It is not a prime number!');
//     }

// }

// primeNumber(1);
// primeNumber(2);
// primeNumber(3);
// primeNumber(4);
// primeNumber(5);
// primeNumber(6);


//dom document object model

// let demo=document.getElementById('demo').innerText;
// console.log(demo);
// let demo1=document.getElementById('demo1').innerHTML;
// console.log(demo1);
// let demo2=document.getElementById('demo2').textContent;
// console.log(demo2);


// let demo=document.getElementById('demo');
// demo.innerHTML='<h1>Santosh Kumar</h1>';

// let para=document.getElementsByClassName('para');

let para=document.getElementsByTagName('p');
console.log(para);




