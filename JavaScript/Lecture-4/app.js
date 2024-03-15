// console.log('santosh');

//bitwise and operator


/*
  8421
4-0100
5-0101
  0101//5     0*2^0 + 0*2^1 +1*2^2 + 0*2^3  0+0+4+0=4



        // 2|10
        //   5


    2  -0010
    6  -0110  
        0110    





*/

// console.log(4 & 5);//4
// console.log(1 & 2);//0
// console.log(4 & 10);//
// console.log(2 & 6);//2


// console.log(4 | 5);//5
// console.log(1 | 2);//3
// console.log(4 | 10);//14
// console.log(2 | 6);//6


// console.log(10==15 & 20==30);

//Bitwise XOR

/*

X Y Z
0 0 0
0 1 1
1 0 1
1 1 0


4-0100
5-0101
  0001  


*/

// console.log(4^5);//

//Not operator(!,~)

// console.log(!10===10);
// console.log(~10===10);


  //Logical Operators

//   1.logical And(&&)
//  2.logical or(||);



// console.log(true && true);//true
// console.log(true || false);//true
// console.log(true && false);//false
// console.log(1 && 0 );//0
// console.log('' && true);//
// console.log('sant' && true);//true
// // console.log( && false);

//Assignment Operators

/*
Operator	Description	Example
=	Assign	10+10 = 20
+=	Add and assign	var a=10; a+=20; Now a = 30
-=	Subtract and assign	var a=20; a-=10; Now a = 10
*=	Multiply and assign	var a=10; a*=20; Now a = 200
/=	Divide and assign	var a=10; a/=2; Now a = 5
%=	Modulus and assign	var a=10; a%=2; Now a = 0


*/

let a=10;
let b=20;
let c=30;
let d=40;
let e=50;   //50%30==20

a =a+20;//30
b =b-10;//10
c=c*3;//90
d=d/10;//4
e=e%30;//20
// console.log(a);//30
// console.log(b);//10
// console.log(c);//90
// console.log(d);//4
// console.log(e);//20

// console.log(a,b,c,d,e);


let student={
    name:'santosh',
    email:'santoshtajpur@gmail.com',
    roll_number:1
};

const ans=delete(student.name);
// console.log(ans);

for(let key in student){
    console.log(student[key]);
}