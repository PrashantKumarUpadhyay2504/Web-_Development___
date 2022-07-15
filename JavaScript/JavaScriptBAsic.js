// Variables:
// JavaScript is typeless Language.

var a=10;   //Global Scope
// a="Piyush";

// It is also known as ECMAScript.

let b=10;  //Block Scope
const c=100; //Constant Variable block Scope

// Datatype:

var num=10;     // Number
var name="Piyush";  //String
var isactive=true;  //Boolean

console.log(num);
console.log(typeof(num));
console.log(typeof(name));
console.log(typeof(isactive));

// // Now we can execute code outside browser using node..

// Arithmatic Operator:

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Uninary Operator
console.log(a++);
console.log(++a)

console.log(a--);
console.log(--a);

// Relational Operator: result  in true and false
console.log(a<b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);

var a=10;

console.log(a==b); //Compare value only .
console.log(a===b); // Compare values and Datatype as well.

// Conditional Operator:
console.log(a>b?"hi":"bye");

// Conditional Statement:

// 1.if
// 2.if...else
// 3.if..else...elif
// 4.switch

if(false){
    console.log("IF Part....");
}
else{
    console.log("Else Part...");
}

// Loop in JavaScript:
// 1.for Loop
// 2.While Loop
// 3.Do..While Loop


// Array in JavaScript:

var x=[12,"hi",12.3,true,false];

x.push("xyz");
x.unshift("javascript")  //Insert  in starting
x.shift();  //delete from starting
x.pop()  //delete from last
console.log(x);



for(let i=0 ; i<x.length ;i++)
    {
        console.log(x[i]);
    }

x.forEach(element =>{
    console.log(element);
});
 
// XML: Client  <-------- Data Exchange------->
// JSON: Comman way to transfer the data over internet.

// JSON: Stand for javascript object Notation

var JSObject={
    id:123,
    name:"Piyush",
    age:30,
    Course:"DSA"
}

console.log(JSObject);
console.log(JSObject.age);
console.log(JSObject.name);

var data=[  
{name:"Piyush" ,age : 20},
{name:"Yash" ,age : 20},
{name:"Ishika" ,age : 20},
{name:"Sarthak" ,age : 21},
{name:"Aakrati" ,age : 20}
];



// Template String:

data.forEach((element)=>{
    console.log(`Name : ${element.name}, Age : ${element.age}`);
});


// Input From User:
var FirstName=prompt("Enter the First name : ");
var lastName=prompt("Enter the Last name : ")
console.log(FirstName+" "+lastName );
const a= parseInt(prompt("Enter the No. : "))  // For Integer type input
const a= parseFloat(prompt("Enter the No. : "))  // For Float type input


// JavaScript Functions :

function Sum(x,y)
{
    return x+y;

}
var result=Sum(4,5);
console.log(result)
