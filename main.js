//Digits
const onesArray = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

//Function to convert hundreds
function hundreds(num) {  
  if (num > 99) {
    //returning the hundred digit + tens digits from function tens
    return onesArray[Math.floor(num / 100)] + tens(num % 100);
  } 
  else {
    return tens(num);
  }
}

//Functions to convert tens
function tens(num) {
    return onesArray[Math.floor(num / 10)] + onesArray[num % 10];  
}

//Function to convert any number
function convert(num) {
  if (num < 10){
    return onesArray[num % 10];
  }
  else{
    return hundreds(num);
  }
}

//Testing out Code
//My main to loop through the given array converting each number to the phoentic equivalent

// function phoneticEquivalent(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(convert(arr[i]));
//   }
// }
// let arrayTest1 = [3, 55, 209];
// let arrayTest2 = [10, 300, 5];

// phoneticEquivalent(arrayTest1);
// console.log('*****Next Array*****');
// phoneticEquivalent(arrayTest2);

//Modified to make script run in node via Command Line Interface
function main(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(convert(arr[i]));
  }
}
//To Run in node.js
let arrayTest = process.argv.slice(2);
console.log(main(arrayTest));