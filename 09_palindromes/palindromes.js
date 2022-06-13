const palindromes = function (string1) {
    let string2 = string1.replace(/[.! ,]/g, "");
    let string3 = string2.toUpperCase();
    const array1 = string3.split("");
    
    n = array1.length-1;
    let boolean = null;
    for (let i =0 ; i <array1.length; i ++){
        
        if(array1[i]==array1[n]){
        boolean = true}
        else {return false}
    n--; 
    }
    return boolean;
    }

// Do not edit below this line
module.exports = palindromes;
