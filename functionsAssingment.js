const fizzBizz= (n)=>{
    for(let i = 1; i <= n;i++){
        if(i%3===0){
            console.log("Fizz");
        }
        else if(i%5===0){
            console.log("Buzz")
        }
        else if(i%3===0 && i%5===0)
        {
            console.log("FizzBuzz")
        }
        else{
            console.log(i);
        }
    }
   
}


const countVowels= (text)=>{
    const vowels = "aeiouAEIOU";
    let count = 0;
    for(let char of text){
        if(vowels.includes(char)){
            count = count + 1
        }
    }
     return count
}

const squareCalculator=(number)=>{
    return number * number
}

const weatherConverter=(temprature)=>{
    let fahrenheit = temprature * 9/5 + 32;
    return fahrenheit;
}

const largeNumber = (a,b,c)=>{
    if(a > b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}

const countCharacters = (charString)=>{
    let charCounter = 0;
    for(let i = 0;  )
}

console.log(countVowels("Kaleab"));
console.log(squareCalculator(3));
console.log(weatherConverter(1))
console.log(largeNumber(8,9,6));