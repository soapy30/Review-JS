let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

// 1. DEFINE Function
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}
// 2. Call the Function
singSong();


// 1. DEFINE ARG FUNCTION
function greet(name) {
    console.log(`Hi there, ${name}!`);
}
// 2. CALL
greet(); // Hi there, undefined!
greet('potato'); // Hi there, potato!
// greet'potato); -> Uncaught SyntaxError (Type)


// 인수가 여러개인 함수들
function repeat (str, numTimes) {
    for(let i=0; i<numTimes; i++)
    console.log(`${str}`);
}
repeat("I am a GOD",5);


function repeat2 (str, numTimes) {
    let result = '';
    for(let i=0; i<numTimes; i++) {
        // 입력한 숫자만큼 str을 결합
        result += str;   
    } 
    console.log(result);
}
repeat2("WOW!",8); //WOW!WOW!WOW!WOW!WOW!WOW!WOW!WOW!
