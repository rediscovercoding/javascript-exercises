const reverseString = function(string) {
let array1 = string.split('');
let array2 = [];
let reversecount = array1.length-1;
for (let i= 0; i < array1.length; i++){
    array2[i] = array1[reversecount];
    reversecount--;
}
return array2.join("");
};

// Do not edit below this line
module.exports = reverseString;
