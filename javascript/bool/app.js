console.log("Hello from the first js file!!");
let result = 3+5;
console.log("Goodbye!");

console.log("----------------------------");

// 조건문
console.log("BEFORE CONDITIONAL");
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUM IS LESS THAN 0.5!");
    console.log(random);
} else {
    console.log("YOUR NUMBER IS OVER 0.5 OR 0.5!!!");
    console.log(random);
}
console.log("AFTER CONDITIONAL")

console.log("----------------------------");


// 조건문 2
/* 
5세이하: FREE
10세이하 Child: $10
65세이하 Adult : $20
65세 초과 Senior : $10
*/

const age = 10;
// 못생긴 코드
// if (age <= 5) {
//     console.log("영유아. 무료입장 대상입니다.");
// } else if (5 < age && age <= 10) {
//     console.log("어린이. 10딸라입니다.");
// } else if (10 < age && age <= 65) {
//     console.log("일반. 20딸라입니다.");
// } else if (age > 65) {
//     console.log("경로우대. 10딸라입니다.");
// } else {
//     console.log("유효하지 않은 나이입니다. 자연수를 입력해 주세요!")
// }

//  좀 나은 코드
// if (age <= 5) {
//     console.log("영유아. 무료입장 대상입니다.");
// } else if (age <= 10) {
//     console.log("어린이. 10딸라입니다.");
// } else if (age <= 65) {
//     console.log("일반. 20딸라입니다.");
// } else if (age > 65) {
//     console.log("경로우대. 10딸라입니다.");
// } else {
//     console.log("유효하지 않은 나이입니다. 자연수를 입력해 주세요!")
// }

// BEST
if (!Number.isInteger(age) || age <= 0) {
    console.log("유효하지 않은 나이입니다. 자연수를 입력해 주세요!");
} else if (age <= 5) {
    console.log("영유아. 무료입장 대상입니다.");
} else if (age <= 10) {
    console.log("어린이. 10딸라입니다.");
} else if (age <= 65) {
    console.log("일반. 20딸라입니다.");
} else {
    console.log("경로우대. 10딸라입니다.");
}

console.log("------------------------------------------");
console.log("------------------------------------------");


/* PWD Validation
 * 6자리 이상, 공백 불가 조건을 만족하기
 */

const password = prompt("Enter a new Password");

// 6자리 이상을 통과시에만 공백 조건 검토하는 중첩 조건문
if (password.length >= 6) {
    // 찾는 조건:공백이 없는 경우 -> 유효한 패스워드
    if(password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    } else console.log("please remove the space")
} else {
    console.log("please enter 6 char")
}