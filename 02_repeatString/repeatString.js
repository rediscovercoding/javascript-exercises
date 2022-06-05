let newString ="";

const repeatString = function(word,repeatNo) {
let newString ="";
if (repeatNo > -1){
for(let i = 1; i < (repeatNo + 1); i++){
   newString += word 
}
return newString
}
else {
    return 'ERROR'
}
};



// Do not edit below this line
module.exports = repeatString;
