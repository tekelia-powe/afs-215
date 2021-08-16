module.exports = {
    fizzBuzz: function(val){
        if(val == 1){
            return "1";
        }
        else if(val == 2){
            return "2";
        }
        else if((val % 3 == 0) && (val % 5 ==0)){
            return "FizzBuzz"
        }
        else if(val%3==0){
            return "Fizz"
        }
        else if(val % 5==0){
            return "Buzz"
        }
        
       
    }
    
}
