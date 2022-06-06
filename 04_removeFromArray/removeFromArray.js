const removeFromArray = function(array1,num1,num2,num3,num4) {
    let array2 =[];
    let i = 0;
    for(const element of array1){
    if(array1[i] !== num1 && array1[i] !==num2 && array1[i] !==num3 && array1[i] !==num4){
        array2.push(element);}
    i++;
    }
    return array2;
};

// Do not edit below this line
module.exports = removeFromArray;
