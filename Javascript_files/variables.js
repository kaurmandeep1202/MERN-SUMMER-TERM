var a = 10;
var b = 20;
var c = a + b;
console.log(c);
console.log("the sum of a " +a+ " and b " +b+ " is " +c) ;
//template literal
console.log(`the sum of ${a} and ${b} is ${c}`);

//take input from user 
const r = require('readline');

//createInterface is a function which passes a json parameter 
const rl = r.createInterface({
  input: process.stdin, //STDIN - NORMAL INPUT TAKES FROM COMMAND LINE
  output: process.stdout // terminal itself 
});


//inside one function one function is there means call back 
rl.question('enter first number: ' ,(a) => {
  rl.question('enter second number: ', (b) => {
     const sum = Number(a) + Number(b) ; // taking string so we have to wrap with number(a)
     console.log(`the sum of ${a} and ${b} is ${sum}`);
     rl.close(); // asking the input window to close
  });
});

 
const r= require('readline');
const rl = r.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("enter a number",(n)=>{
    if(n%2==0){
        console.log(`${n} is Even number`);
    }else{
        console.log(`${n} is Odd number`);
    }
    rl.close();
});