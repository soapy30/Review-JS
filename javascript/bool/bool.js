const userInput = prompt("Enter something");

if(userInput===null) {
    console.log("null (Cancel) → Falsy");
} else if (userInput ===""){
    console.log(' ""  [빈 문자열. string but FALSY]');
} else if (userInput.trim()==="") {
    console.log(' " "  [공백 존재. TRUTHY]');
} else {
    console.log("TRUTHY");
}

console.log(Boolean("")); //false
console.log(Boolean(" ")); //true
