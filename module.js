/*Module is a file in node js besically incpuate the code */

//How to use require in node js what is the basic logic
//IIFE function provide the function require(Immediatly invoke funtion)



/*const color = require('cli-color');
console.log(color.red('Krish Tiwary'))
console.log(color.blue('Krish Tiwary'))*/
const auth = require('./auth');
auth.register("Krish Tiwary");
auth.login('Krish','Tiwary');