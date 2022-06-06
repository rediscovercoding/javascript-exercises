const sumAll = function(num1,num2) {
    let sum = 0;
    let error = "ERROR";
    if(Number.isInteger(num2) && Number.isInteger(num1) && num2>0 && num1>0){
    if (num2>num1){
        for(let i = 0;i <= ((num2-num1)+1) ; i++)
            {sum =sum+i}
    }
    else if (num1>num2){
        for(let i = 0;i <= ((num1-num2)+1) ; i++)
            {sum =sum+i}    
    }
    
    return sum;
    }
    else {return error;}
};

// Do not edit below this line
module.exports = sumAll;
