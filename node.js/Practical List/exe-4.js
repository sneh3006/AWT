function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}

//Nested Function
console.log('Nested Function :');
function outer(){
    console.log('Outer Function');
    function inner(){
        console.log('Inner Function');
    }
    inner();
}
//Calling Nestd Function in another function 
function main(){
    console.log('main Function :');
    console.log(factorial(5));
    outer();
}

main();