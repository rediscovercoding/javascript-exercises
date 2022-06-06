const leapYears = function(year) {
    if(year>0 && Number.isInteger(year/4) && (year%100) !== 0){return true}
    else{
        if(Number.isInteger(year/400)){return true}
        else {return false}}
};

// Do not edit below this line
module.exports = leapYears;
