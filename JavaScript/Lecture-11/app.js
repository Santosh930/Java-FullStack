// console.log('Lecture-11');

/*
1.diff b/w let const and var
2.this,window, and new keyword,
3.break,continue,return
5.hoisting
6.forEach,map,reduce,filter
7.todoApp



*/

/*

1.var-->if we write a varible name using var then we are able to redclare and reassign varaiable;var is a global scope.
2.let and const are block level scop;





*/


//block {}

// {
//     var a=20;
//     console.log(a);
// }
// console.log(a+30);

//let
// {
//     let a=20;
//     console.log(a);//20
// }
// console.log(a+30);//a is not defined

// let ans=30;
// // let ans=40;//not possible redclaration not allow
// ans=40;

// //const
// {
//     const a=20;
//     console.log(a);//20
// }
// console.log(a+30);//a is not defined


// var name;
// name='santosh';
// // const obj;

// const PI=3.14;





// var name='santosh';
// console.log(name);
// var name='manohar';
// console.log(name);
// let str='aman';
// str='raman'
// console.log(str);
// const arr=1234;
// arr=234;
// console.log(arr);


//this 



/*


What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.



*/
// let obj={
//     fname:'Santosh',
//     lname:'kumar',
//     fullName:function(){
//         // console.log(this.fname);
//         // console.log(this);//obj

//         console.log(`My fullName is ${this.fname}  ${this.lname}`);
//     }
// };


// obj.fullName();

// console.log(this);//window


// function Add(){
//     console.log(this);//window object
// }
// Add();

// "use strict";


// console.log(this);


// function add(){
//     console.log(this);//undefined
// }
// add();



//new keyword for creating a new instance

// let arr=new Array();
// let obj=new Object();



// obj.fname='Santosh';
// obj.lname='Kumar';
// arr[0]=1;
// arr[1]=2;
// arr[2]=3;
// arr[3]=10;
// console.log(obj);
// console.log(arr);


//By using an Object constructor


// function Animal(id,name,color){
//     this.id=id,
//     this.color=color,
//     this.name=name;
// };

// let A1=new Animal(1,'Dog','Black');
// let A2=new Animal(1,'cat','Black');
// let A3=new Animal(1,'cow','Black');
// let A4=new Animal(1,'goat','Black');
// let A5=new Animal(1,'hen','Black');
// let A6=new Animal(1,'bull','Black');

// console.log(A1);
// console.log(A2);
// console.log(A4);


function f(x){
    x='x-'+ x;
    return function(y){
        y='y-'+ x;
        return function(z){
            
            
                return 'z-'+y;
            
        }
    }
}

let ans=f(10)(2)(3);
// console.log(ans);


