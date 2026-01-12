// 일반 function 키워드로 이름이 add인 함수 생성
// function add (a, b) {
//     return a + b;
// }
// console.log(`result: ${add(1,5)}`);

// 방법2. 함수를 변수 안에 담아서 생성
// add는 함수명이 아니라, 변수명!

/** 추가 개념: 자바스크립트의 함수는 일반 값처럼 취급되며(Value)
변수에 담기고, 다른 함수에 전달되고, 함수의 결과로 반환될 수 있다. **/
// const add = function (a, b) {
//   return a + b;
// };
// ----------------------------------------------------

// 고차 함수
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

// 함수
function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

function greet() {
  console.log(`Hi there! Im Ding`);
}

// 함수 호출 시점에 func 매개변수에 rollDie 함수가 전달됨
// callTwice(rollDie);
// callTwice(greet);

// callTenTimes(greet);

// ----------------------------------------------------

// 반환 함수
// 하나의 함수 내부에 return값으로 각각 함수 작성
// function makeMystery () {
//     const random = Math.random();
//     if(random > 0.5) {
//         return function () {
//             console.log("😄CONGRATS! IM HAPPY😄");
//         }
//     } else {
//         return function () {
//             alert("IM ANGRY. WHY DON'T YOU ANNOYIMG ME?");
//             alert("DONT CLOSE THIS!🤬");
//             alert("DONT CLOSE THIS!🤬");
//             alert("DONT CLOSE THIS!🤬");
//         }
//     }
// }

// 함수를 만들어주는 함수(팩토리 함수)

// // 50에서 100사이인지
// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }
// // 1에서 10사이인지
// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }

// 위의 함수를 함수 내부의 인자 min~max 받아서 공통화
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

// ----------------------------------------------------
// 메서드 작성
const myMath = {
  PI: 3.14,
  square: function (num) {
    return num * num;
  },
  cube: function (num) {
    return num ** 3;
  },
};
// 위 객체에서는 function 키워드 생략 가능!!! 쉼표는 필수(아래처럼)
// const myMath = {
//     PI: 3.14,
//     square (num) {
//         return num * num;
//     },
//     cube (num) {
//         return num ** 3;
//     }
// }
// console.log(myMath.square(4)); // myMath내부의 square함수 실행 -> 4*4 = 16
// console.log(myMath.cube(2)); // myMath내부의 cube함수 실행 -> 2*2*2 = 8

// ----------------------------------------------------
// ----------------------------------------------------

/* Keyword "this" */
const cat = {
  name: "Pang Pang",
  color: "yellow",
  breed: "street",
  meow() {
    /* 콘솔 디버깅 시 콤마를 활용 */
    console.log("this is ", this); // this는 cat객체
    console.log(`${cat.name} says MEOW MEOW MEOW~`);
    // 문자열과 + 또는 ${}로 합치면 값이 문자열로 변환되어 출력
    // console.log(`This means: ${this}`); // This means: [object Object]
    // console.log("this is " + this); // this is [object Object]
  },
};


//meow2 실행시 동일하게 cat.meow()가 실행될 것
// 그 경우의 this 를 확인하기 위함

const meow2 = cat.meow; // 함수 참조를 저장 (아직 this 없음)
meow2(); // 이때 this가 결정

// const meow2 = cat.meow(); // 이렇게 쓰면 meow 실행결과를 저장하는 것 -> 안됨
