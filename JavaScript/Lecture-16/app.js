// console.log('hello');

//oops concept
//spread rest destructuring


// let arr1=[1,2,3];
// let arr2=[4,5,6];

// let arr=[...arr1,...arr2];//[1,2,3,4,5,6];
// console.log(arr);





// function sum(x,y,z){

//     return x+y+z;

// };

// let ans=sum(...[1,2,3]);
// console.log(ans);

// # Rest parameters

// The **rest parameter** syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent [variadic functions](https://en.wikipedia.org/wiki/Variadic_function) in JavaScript.


// function Add(...arguments){
//     // console.log(arguments);
//     let sum=0;
//     for(let i=0;i<arguments.length;i++){
//         // console.log(arguments[i])
//         sum += arguments[i];
//     }
//     console.log(sum);
// }

// Add(1,2);//3
// Add(1,2,3);//6
// Add(10,20,30,40);//100

// let arr1=['car','bus','truck'];
// let car=arr[0]
// let bus=arr[1]
// let truck=arr[2]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// let [a,,b]= ['car','bus','truck'];
// console.log(a);
// console.log(bus);
// console.log(b);


//oops concepts

//class
// class Employee {
//     constructor(fname,lname){
//         this.fname=fname,
//         this.lname=lname

//     }
//     printFullname(){
//         console.log(`This is ${this.fname} ${this.lname}`)
//     }
// };

// console.log(Employee);
// let e1=new Employee('Santosh','Kumar');
// let e2=new Employee('Saket','Kumar');
// let e3=new Employee('Shimpy','Kumar');
// let e4=new Employee('Anil','Kumar');

// console.log(e1);
// console.log(e2);
// console.log(e3);
// console.log(e4);
// e1.printFullname();
// e2.printFullname();
// e3.printFullname();
// e4.printFullname();


//Inheritance

// class Santosh extends Employee{
//     constructor(fname,lname,city){
//         super(fname,lname);
//         this.city=city;

//     }

//     printFullAdd(){
//         console.log(`${this.fname} ${this.lname} From ${this.city}`);
//     }
// }

// let s1=new Santosh('Santosh','Kumar','Patna');
// console.log(s1);
// s1.printFullname();
// s1.printFullAdd();

//Poly morphism

// class Vehicle{
//     run(){
//         console.log('Vehicle is running');
//     }
// }
// class Car extends Vehicle{
//     run(){
//         console.log(`Car is running`);
//     }
// }
// class Truck extends Vehicle{
//     // run(){
//     //     console.log(`Truck is running`);
//     // }
// }

// let v1=new Vehicle();
// let v2=new Car();//
// let v3=new Truck();
// v1.run();//Vehicle is running
// v2.run();//Car is running
// v3.run();//Vechicle is running

//2 Encapsulation

//getters and setters method

// class Employee{
//     constructor(){
//         let name;
//         let rating;
//     }
//     getName(){
//         return this.name;

//     }
//     setName(value){
//         this.name=value;

//     }
// }
// let e1=new Employee();
// e1.setName('Santosh');
// console.log(e1.getName());

//3 Abstraction

class Employee{
    constructor(n,r){
        this.name=n;
        this.rating=r;
        this.skills=[];
    }
    learnSkills(skill){
        this.skills.push(skill);
    }
}

let e1=new Employee('Santosh',10);
e1.learnSkills('oops');
e1.learnSkills('oops1');
e1.learnSkills('oops2');
e1.learnSkills('oops3');
console.log(e1);
//same thing as
//Employee.prototype.learnSkills=function(){

//}


