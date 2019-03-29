const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function isValid(num){
  if(typeof parseInt(num) == 'number'){
    return true;
  }
  else return false;
}

function findRamp(number){
  let counter = 0;
  for(let i = 0; i < number; i++){
    let notRamp = false;

    let numArr = i.toString().split('');
    // console.log('numArr', numArr);

    for(let j = 0; j < numArr.length-1; j++){
      //michael is driving

      if(parseInt(numArr[j]) > parseInt(numArr[j+1])) {
        notRamp = true;
      }
    }
    if(!notRamp){
      counter++;
    }
  }
  console.log(counter);
}
function getPrompt() {
  //emilio is driving
  rl.question('Enter your number: ', (number) => {
    
    if(isValid(number)){
      findRamp(number);
    }
    else{
      console.log("you suck")
    }
    getPrompt();
  });
}
getPrompt();