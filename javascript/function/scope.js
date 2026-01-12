/** 함수 블록 */

// let eggs = 0;
// console.log(`before function - ${eggs}`); // 0

// function collectEggs () {
//     console.log(`in function(전) - ${eggs}`); // 0
//     eggs = 6;
//     console.log(`in function(후) - ${eggs}`); // 6
// }
// collectEggs();
// console.log(`after function - ${eggs}`); // 6

// -----------------------------------------------------

// 동일 이름의 변수 참조

// let hamster = 'dingding';

// // 1
// function cuteHam () {
//     let hamster = 'gamza';
//     console.log(hamster);
// }
// cuteHam(); // 블록 내부 선순위 - gamza

// // 2
// function cuteHam2 () {
//     // let hamster = 'gamza'; // 이 코드만 주석
//     console.log(hamster);
// }
// cuteHam2(); // 후순위 - dingding

// -----------------------------------------------------

/** 그 외 블록 - 함수 외 중괄호 범위의 내용들
 * (ex. 조건문,반복문 등) */

// let radius = 8;
// if(radius > 0) {
//     const PI = 3.141592;
//     let msg = 'HIIII';
//     //console.log(msg); // 'HIIII'
// }
// console.log(radius); //8
// console.log(msg); //err : 해당 스코프에서 선언되지 않았다.

for (let i = 0; i < 5; i++) {
  let loopMsg = "abcde";
  console.log(loopMsg); //5 회 실행
}
// console.log(loopMsg); // err

// -----------------------------------------------------
/** Lexical Scope - “함수는 태어난 곳의 변수를 본다" */

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    for (let hero of heroes) {
      console.log(`Please Help! Save me ${hero}`);
    }
  }
  // bankRobbery 내부에서만 cryForHelp가 보임(가시성)
  cryForHelp();
}
// BankRpbbery를 호출하면 그 내부에서 선언+호출한 cryForHelp도 콘솔에 찍힘
bankRobbery();

// -----------------------------------------------------
