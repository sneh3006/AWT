const ariOpr =require('./firstmodule')
const { multiplication, div } = require('./secondModule/temp123');

console.log('acessing module function :'+ ariOpr.add(5,10));
console.log(ariOpr.secretkey);

console.log(multiplication(3,4));
console.log(div(10,2));