//Class Implimentation in JavaScript
class method{
    name='Rahul';
    age=20;
    constructor(){
        console.log('Constructor Called');
    }
    sum(a,b){
        return a+b;
    }
}

let obj=new method();
console.log(obj.name);
console.log(obj.age);
console.log(obj.sum(1,2));

//let and const
console.log('let and const :');
var a=10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);

var a=20;
// let b=30;
// SyntaxError: Identifier 'b' has already been declared

// const c=40;
// SyntaxError: Identifier 'c' has already been declared
console.log('Block Scope :');
{
    var varinside=10;
    let letinside=20;
}
console.log(varinside);
// console.log(letinside);
// ReferenceError: letinside is not defined

//Arrow Function
console.log('Arrow Function :');
let inside=()=>{
    // console.log('Inside Arrow Function');
    //Arrow Function can't be used as a constructor
    //Arrow Fuction Must return a value
    return 'Inside Arrow Function';
}
var arrow=(a,b)=>{
    return a+b;
}
console.log(inside());
console.log(arrow(1,2));

//Spread of Operator
console.log('Spread of Operator :');
let arr=[1,2,3,4,5];
console.log(arr);
console.log(...arr);
let arr1=[...arr,6,7,8,9,10];
console.log(arr1);

//For of Loop
console.log('For of Loop :');
for(let i of arr){
    console.log(i);
}

//For in Loop
console.log('For in Loop :');
for(let i in arr){
    console.log(i);
}

//Map Object
console.log('Map Object :');
let map=new Map();
map.set('name','Rahul');
map.set('age',20);
console.log(map);
//get method
console.log(map.get('name'));
console.log(map.get('age'));
//has method
console.log(map.has('name'));
console.log(map.has('age'));
//delete method
console.log(map.delete('name'));
console.log(map);
//size method
console.log(map.size);
console.log(map.clear());
console.log(map);

//Set Object
console.log('Set Object :');
let set=new Set();
set.add('Rahul');
set.add('Rohan');
set.add('Manan');
set.add(90);
console.log(set);
//has method
console.log(set.has('Rahul'));
console.log(set.has(90));
//delete method
console.log(set.delete('Rahul'));
console.log(set);
//size method
console.log(set.size);
console.log(set.clear());
console.log(set);

//Symbol
console.log('Symbol :');
let sym1=Symbol('Rahul');
let sym2=Symbol('Rahul');
console.log(sym1);
console.log(sym2);
console.log(sym1==sym2);
console.log(sym1===sym2);
console.log(sym1.toString());
console.log(sym2.toString());


//default parameter
console.log('Default Parameter :');
function defaultparameter(a=10,b=20){
    return a+b;
}
console.log(defaultparameter());
console.log(defaultparameter(1));
console.log(defaultparameter(1,2));

//Rest Parameter
console.log('Rest Parameter :');
function restparameter(...a){
    console.log(a);
}
restparameter(1,2,3,4,5);

//Promise
console.log('Promise :');
let promise=new Promise((resolve,reject)=>{
    let a=10;
    if(a==10){
        resolve('Success from Promise');
    }
    else{
        reject('Failure from Promise');
    }
}
);
promise.then((message)=>{
    console.log(message);
}
).catch((message)=>{
    console.log(message);
}
);

