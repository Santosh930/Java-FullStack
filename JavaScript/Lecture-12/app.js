// console.log('Lecture-12');

// break,continue,return
// hoisting
//forEach,map,reduce,filter
//todoApp

//function calling
// Saloni();


// function Saloni(){
//     let number=10;
//     for(let i=1;i<=10;i++){
//         console.log(i);
//         if(i==11){
//             // break;
//             // return;
//             console.log('continue');
//             continue;
//         }
//     }

//     console.log('outside forloop');
// };

// console.log('outside function');

//hoisting:-hoisting refers to the built-in behavior of the language through which declarations of functions, variables, and classes are moved to the top of their scope – all before code execution. In turn, this allows us to use functions, variables, and classes before they are declared.

// console.log(name);
// const name='santosh';

// console.log(str);
// let str='saloni';


// console.log(arr);
// var arr=[1,2,3,4,5];

// var arr;
// console.log(arr);
// arr=[1,2,3,4,5];
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
//printing all elements of arr by using map
// let ans=arr.map((elem,index,arr)=>{
//     // console.log(arr);

//     return elem;

// });
// arr.filter((elem,index,arr)=>{
//     if(elem%2==0){
//         console.log(elem);
//     }
    
// });
// console.log(ans);


//foreach
// let box=[];

// let result=arr.forEach(function(elem,index,arr){
//     box.push(elem);

// });
// console.log(box);

/*

function  input    output
map       arr[]       arr[]
filter    arr[]        arr[]
foreach   arr[]        undefined
reduce    arr[]         sum/single value






*/

//reduce method

// n*(n+1)/2  10*11/2=55

// let arr=[1,2,3,4,5,6,7,8,9,10];

// let res=arr.reduce(function(sum,elem){
//     return sum+elem;
// },30);

// console.log(res);
