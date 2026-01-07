// NESTED FOR LOOP
// for (let i=1; i<=10; i++) {
//     console.log(`i is!! ${i}!!!`);
//     // j 루프 추가작성
//     for (let j=1; j<4; j++) {
//         console.log(`j is ${j}`)
//     }
// }


// NESTED ARR ITERATION
// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     for(let j = 0; j < seatingChart[i].length; j++) {
//         // 중첩 배열에 접근
//         console.log(seatingChart[i][j])
//     }
// }


// while loop
// const SECRET = "babypotato";

// let guess = prompt("plz input your secret key");
// while(guess !== SECRET) {
//     guess = prompt("plz reinput");
// } 
// console.log("Right!!");


// while and break
// let userInput = prompt("아무거나 입력해보시오");

// while (true) {
//     userInput = prompt(userInput);
//     if(userInput === "그만해") break;
// }
// console.log("그만하라고 해서 그만함");



// 숫자 추측 게임
let maxnum = parseInt(prompt("최대 숫자를 지정해 주세요"));
// 형식 불만족 필터하기
while (Number.isNaN(maxnum) || maxnum <= 0) {
    maxnum = parseInt(prompt("형식 불만족. 자연수만 입력해주세요"));
}
// 입력받은 최댓값을 이용한 난수 생성
const targetNum = Math.floor( Math.random() * maxnum ) + 1;


// 추측1
let guess = prompt("첫번째로 추측할 숫자 입력[q를 눌러 종료할 수 있습니다]");
let attempt = 1;

// 추측에 대한 피드백 루프(항상 실행)
// 루프 안에서는 반드시 루프 조건에 쓰인 값의 업데이트가 있어야 한다
while (true) {
    // str 'q'입력시 while문 밖으로..
    if(guess === 'q') break;
    // 루프 내부에서 숫자비교를 위해 형변환-변수
    const guessToInt = parseInt(guess);
    // int로 변환한 guess가 NaN인 경우 형식 피드백
    if(Number.isNaN(guessToInt)) {
        guess = prompt("NaN. 숫자만 입력하세용[q를 눌러 종료할 수 있습니다]");
        // NaN아니라면 이 if블럭은 넘어가세요
        continue;
    }

    // 형식문제없음+숫자일치한다면 while문 밖으로..
    if(guessToInt === targetNum) break;

    // 추측값(숫자)에 대한 피드백 및 횟수 카운터 증가
    if (guessToInt > targetNum) {
        guess = prompt("숫자가 너무 커용. 다시 입력");
        attempt++;
    } else if (guessToInt < targetNum) {
        guess = prompt("숫자가 너무 작아용. 다시 입력");
        attempt++;
    }
}
// while문에서 나왔다면.. q입력 또는 정답 맞춤
if (guess === 'q') {
    console.log(`q를 입력하여 강제종료됨. 정답은 ${targetNum}였어요..`);
} else console.log(`${attempt}번 만에 맞췄어요! 정답은 ${targetNum}`);



/*
 강의 코드(흐름 이해 목적)
 * let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}
 */