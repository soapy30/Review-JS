const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// 객체를 for 돌리면? -> Uncaught TypeError: testScores is not iterable
// for (let person of testScores) {
//     console.log(person)
// }

// 객체 형태로 반복출력하는 방법
// for in 루프 사용
for (let scores in testScores) {
    //  keys: values
    console.log(`${scores}: ${testScores[scores]}`)
}

// key/value를 각각 배열로 뽑아내는 방식(길이 사용 가능)
const people = Object.keys(testScores);
console.log(people); //(10) ['keenan', 'damon', 'kim', 'shawn', 'marlon', 'dwayne', 'nadia', 'elvira', 'diedre', 'vonnie']

const scores = Object.values(testScores);
console.log(scores); //[80, 67, 89, 91, 72, 77, 83, 97, 81, 60]

// 배열속배열 엔트리구조
const entries = Object.entries(testScores);
console.log(entries); // [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]


// 평균점수 구하기
let totalScore = 0;
for (let score of scores) {
    totalScore += score;
}
console.log(`totalScore is ${totalScore}`);

const avgScore = (totalScore / people.length);
console.log(`avgScore is ${avgScore}`);


// entry를 이용해 축약 가능
let total = 0;
// array destructuring 구조분해 - 각 변수로 꺼내는 문법
// const [person, score] = ['keenan', 80];
for (const [person, score] of Object.entries(testScores)) {
    total += score;
}
const avg = total / Object.keys(testScores).length;
// 확인
console.log("---------------------------------------");
console.log(`total2:${total}, avg2:${avg}`);
