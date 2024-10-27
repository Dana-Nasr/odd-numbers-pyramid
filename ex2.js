function printOddNumbers(number) {
  var lst = [];
  for (i = 0; i < number * 2 + 1; i++) {
    if (i % 2 == 1) {
      lst.push(i);
    }
  }

  for (i = 0; i < lst.length + 1; i++) {  
    var endl = [];
    for (j = 0; j < i; j++) {
      endl.push(lst[j]);
    }
    console.log(endl.join(" "));
  }
}

const readline = require("readline").createInterface({  //code sniplet (function) from codeacademy.com
  input: process.stdin,
  output: process.stdout,
});
readline.question("Enter a number: ", (number) => {
  num = parseInt(number);
  printOddNumbers(num);
  readline.close();
});

//O(n^2) n being the length of lst passed to the 2nd for loop