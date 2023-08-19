// requires to run program on console everytime for printing next next numbers one by one

var output = [];
var num = 1;

function FizzBuzz() {
    if(num % 3 == 0){
        output.push("Fizz");
        
    }
    else if(num % 5 == 0){
        output.push("Buzz");
    }
    else if(num % 3 == 0 && num % 5 == 0)
    {
        output.push("FizzBuzz");
    }
    else{
        output.push(num);
    }
    num++;
    console.log(output);
}

FizzBuzz();
