/*

DOM-->DOM is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."



selecting method
1.By id------>   document.getElementById('id');
2.By Class--->   document.getElementsByClassName('className');
3.By Name---->   document.getElementsByName('Name');
4.By TagName-->  document.getElementsByTagName('TagName');
5.By querSelector-->document.querySelector('h1/#idName/.className')//returns a first(single) element
6.By querSelectorAll-->document.querySelectorAll('h1/#idName/.className')//it returns a nodeList


//create
document.createElement('p');






*/


// let h1=document.getElementById('demo').innerText;
// console.log(h1);
// let h2=document.getElementById('demo').textContent;
// console.log(h2);


// let div=document.getElementById('box');
// // console.log(div);
// let p=document.createElement('p');
// p.innerText='This is para -1';
// div.append(p);//append ele inside div
// // div.prepend(p);
// console.log(div);

// let h1=document.getElementById('heading-1');
// console.log(h1);

// h1.remove()

// let box=document.getElementById('box');
// console.log(box);
// box.style.color='red';
// box.style.backgroundColor='green'


// let h1=document.querySelector('#heading');
// let h1=document.querySelector('.box');
// let h1=document.querySelectorAll('h1');
// console.log(h1);

// function myFunction(){

//     document.write('I am santosh kumar');

// }

let number=0;


function increment(){
    // console.log('I am inside incriment function');
    // document.write('I am incide incriment function');

    let display=document.querySelector('#display');
    number++;
    display.innerText=number;
}

function decrement(){
    // console.log('I am inside incriment function');
    // document.write('I am incide incriment function');

    if(number>0){
    let display=document.querySelector('#display');
    number--;
    display.innerText=number;

    }
    
}

function reset(){
    let display=document.querySelector('#display');
    display.innerText=0;

};








