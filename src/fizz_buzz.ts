import { timeEnd } from "console";
export function fizz_buzz(){
    console.time();
    for (let i = 0; i <= 60; i++) {
        if (i%5 === 0 && i%3 === 0) {
            console.log(i + " FizzBuzz");
        }
        else{
            if (i%3 === 0) {
                console.log(i + " Fizz");   
            }
    
            if (i%5 === 0) {
                console.log(i + " Buzz");
            }      
        }
    }
    console.timeEnd()
}
