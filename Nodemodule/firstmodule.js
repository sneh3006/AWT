const add= function(a,b){
    return (a+b)
}

const sub= function(a,b){
    return (a-b)
}

const secretkey=123456789;

// module.exports=add; //This syntax can only export single argument
// module.exports=sub;
// module.exports.add=add;
// module.exports.sub=sub;

module.exports={
    add,
    sub,
    secretkey
}
