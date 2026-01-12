/* 참고: 난수생성 관련 
Math.ceil(Math.random() * numSides); --> 더 간단하지만 난수 생성의 경계값 위험 존재함
*/

// function rollDie(numSides) {
//     // 파라미터에 디폴트 지정: 과거 방식
//     if(numSides === undefined) {
//         numSides = 6;
//     }
//   return Math.floor(Math.random() * numSides) + 1; // 안정 패턴(권장)
// }

// Default Parameter 작성 (최신)
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

// ------------------------------------------------------------------
// spread

const cats = ["Blue", "Pang", "Rocket"];
const dogs = ["Rupy", "Max"];

const allPets = [...cats, ...dogs]; // 각 컨텐츠를 복사+연결
const newArr = [...cats, "Yall"]; // 가능 ['Blue', 'Pang', 'Rocket', 'Yall']

const strSpread = [..."hello"]; // ['h', 'e', 'l', 'l', 'o']

// ------------------------------------------------------------------
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };
const catDog = { ...feline, ...canine }; // {legs: 4, family: 'Caninae', isFurry: true}

// 사용 예시
const dataFromForm = {
  email: "pota@gmail.com",
  password: "pwdpwd1234!",
  username: "pota",
};
const newUser = { ...dataFromForm, id: 103, isAdmin: false };

// ------------------------------------------------------------------
// Rest 매개변수 : spread와 반대로 나머지를 한곳에 모으는 역할
function sum(...nums) {
// console.log(nums); // -> 파라미터자리 나머지 모아서 배열로
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyone) {
    console.log(`Congrats! Gold: ${gold}`);
    console.log(`Congrats! Silver: ${silver}`);
    console.log(`And Thanks to! ${everyone}`);
}

raceResults('seonyang','dingding','gamza','jundoll','eunbi');