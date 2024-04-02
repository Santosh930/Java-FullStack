// console.log('Lecture-13');


/*

1.callback function
2.setTimeOut/setInterval
3.asynchronous vs synchronous
4.High order function 
5.async await
6.promise
7.prototype
8.try catch
9.



*/

//callBack function


// function Add(a,b,callback){
//     let sum =a+b;
//     callback(sum);

// };

// function display(value){
//     console.log(value);

// }
// // display('santosh');

// Add(20,30,display);
//Functions running in parallel with other functions are called asynchronous!

// console.log(1);//10  1sec
// setTimeout(()=>{
// console.log('hello');
// },8000);//time in milisec-1sec=1000msc
// console.log(2);
// console.log(3);
// console.log(4);
// let count=1;
// setInterval(()=>{
//     count++;
    
//     console.log(`I am setInterval Example ${count}`);
// },1000);
// console.log(5);
// console.log(6);

// setTimeout(()=>{
//     console.log('hello');
// },8000);//time in milisec-1sec=1000msc


//promise  reject  success

// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });

//     console.log(myPromise);


    //1.by using then
    //2.Async Await
    //callbackk


    // function myDisplayer(some) {
    //     document.getElementById("demo").innerHTML = some;
    //   }
      
    //   let myPromise = new Promise(function(myResolve, myReject) {
    //     let x = 0;
      
    //   // some code (try to change x to 5)
      
    //     if (x == 0) {
    //       myResolve("OK");
    //     } else {
    //       myReject("Error");
    //     }
    //   });
      
    //   myPromise.then(
    //     function(value) {myDisplayer(value);},
    //     function(error) {myDisplayer(error);}
    //   );


    // async ()=>{
    //     let res=await myDisplayer(value);
    //     let rej=await myDisplayer(error);
    // }

    // let url='https://fakestoreapi.com/products';

    // let data=fetch(url);
    // console.log(data);

    // fetch(url)
    // .then(res=>res.json())
    // .then(json=>console.log(json))

    //by using async await

    //  async function display(){
    //     let data=await fetch(url);
    //     let res= await data.json();
    //     console.log(res);

    // }

    // display();
      
