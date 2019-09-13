const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



function addNumbers(sum, numLeft, completionCallback) {
  if (numLeft > 0) {
    reader.question("Enter #: ", function(numString) {
      let num = parseInt(numString); 
      sum += num; 
      console.log(sum); 
      numLeft--; 
      addNumbers(sum, numLeft, completionCallback);
    }); 
  }
  if (numLeft === 0){
    completionCallback(sum);
    reader.close(); 
  }
}


  function completionCallback(sum){
    console.log(sum)
  }


 addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)); 
