// console.log('Lecture-10');


/*

1.LocalStorage
2.sessionStorage
3.Events
4.Local variable vs global variable
5.hoisting
6.forEach,map,reduce,filter
7.todoApp







*/


//local variable vs global variable

// let a=10;//global variable
// let b=20;//global variable


// function add(){
//     let c=30;//local variable
//     let result=a+b+c;

//     console.log(result);
// }
// add();//60



// console.log(a);//10
// console.log(b);//20
// console.log(c);//c is not defined


// let str='santosh';
// let num=123;
// let obj={
//     fname:'Santosh',
//     lname:'Kumar'
// };

// let arr=[
//     {
//         fname:'Santosh',
//          lname:'Kumar'},
//     {
//     fname:'Santosh',
//     lname:'Kumar'
//     },
//     {
//     fname:'Santosh',
//     lname:'Kumar'
//     },
//     {
//     fname:'Santosh',
//     lname:'Kumar'
//     }
// ]

// localStorage.setItem('newObj',JSON.stringify(obj));
// localStorage.setItem('name',str);
// localStorage.setItem('newNum',num);
// localStorage.setItem('newArr',JSON.stringify(arr));

// JSON-Java Script Object Notation


// let obj={
//     'fname':'Santosh',
//     'lname':'Kumar',
// }


//get data from localstorage

// let  str=localStorage.getItem('name');
// let num=localStorage.getItem('newNum');
// let obj=localStorage.getItem('newObj');
// let arr=localStorage.getItem('newArr');
// console.log(num);
// console.log(str);
// console.log(JSON.parse(obj));
// console.log(JSON.parse(arr));

//remove data from locale storage

// localStorage.removeItem('newArr');///delete single item
// localStorage.clear();  //remove all data from localstorage


//session storage

// let str='santosh';
// sessionStorage.setItem('name',str);

//onsubmit event

let form=document.querySelector('#demo');
let arr=JSON.parse(localStorage.getItem('userData'))||[];
// console.log(form);
form.addEventListener('submit',myfunction);

function myfunction(e){
    e.preventDefault();
    // let userName=document.getElementById('user').value;
    // let email=document.getElementById('email').value;
    // console.log(userName,email);

    let obj={
        userName:document.getElementById('user').value,
        email:document.getElementById('email').value,
    }

    arr.push(obj);

    // console.log(arr);

   let result=localStorage.setItem('userData',JSON.stringify(arr));
//    console.log(result)

    


    // console.log('I am inside function');

}

console.log(arr);


