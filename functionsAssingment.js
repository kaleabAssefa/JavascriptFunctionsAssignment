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


console.log(countVowels("Kaleab"));