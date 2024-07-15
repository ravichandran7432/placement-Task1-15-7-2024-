for(let i=0;i<=100;i++) {
    if(i%3==0 && i%5==0){
        console.log("FizzBizz");
    }else if(i%3==0){
        console.log("Fizz");
    }else if(i%5==0){
        console.log("buzz");
    }else{
        console.log(i);
    }
}
