function add(a,b){
    return a+b;
}
arr = new Array(1,2,3,4,5,6,7,8,9,10,'Hello',true,add(1,2),key=14,[15,16]);
console.log(arr);
console.log(`Length of array is : ${arr.length}`);
console.log(arr[0]);
console.log(arr[1]);
//push pop
arr.push(11);
console.log(arr);
arr.pop();
console.log(arr);
//shift method
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
//splice method
arr.splice(2,3);
console.log(arr);
//slice method
console.log(arr.slice(1,8));
//indexOf method
console.log(arr.indexOf(1));
//flat method
console.log(arr.flat(1));
//delete method
delete arr[8];
console.log(arr);

//Join method
console.log(arr.join(' and '));

console.log(arr.concat(['Hello','World']));


//sort method
console.log(arr.sort());


//Object 

let obj = {
    name : 'Rahul',
    age : 20,
    gender: 'Male',
    address : {
        city : 'Pune',
        state : 'Maharashtra',
        country : 'India'
    }
};

details=(obj)=>{
    console.log(`Name : ${obj.name}`);
    console.log(`Age : ${obj.age}`);
    console.log(`Gender : ${obj.gender}`);
    console.log(`Address : ${obj.address.city},${obj.address.state},${obj.address.country}`);

}

details(obj);
