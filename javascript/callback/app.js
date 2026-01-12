// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// const numbers = Array(20).fill().map((value,idx)=>idx+1);
const numbers = Array(20).fill().map((_,idx)=> {return idx+1});
// console.log(numbers);


/*  ForEach */
/** 일반 함수 정의 -> 콜백함수로 전달 **/
// // print 함수를 forEach에 콜백 함수로 전달
// function print (el) {
//     console.log(el);
// }
// // print를 콜백함수로 forEach 반복문 사용
// numbers.forEach(print);


/** 익명 콜백함수 **/
// function 키워드
// numbers.forEach(function (el) {
//     if(el % 2 !== 0) {
//         console.log(`홀수만 고르기: ${el}`);
//     }
// })
// // 화살표함수
// numbers.forEach((el)=>{
//     if(el % 2 === 0) {
//         console.log(`짝수만 고르기: ${el}`);
//     }
// })

// ----------------------------------------------------------------------------------

/* MAP */
const texts = ['wolf','lol','omg','cookie'];
// map을 통해 texts에서 각 요소를 대문자화한 새 배열을 return -> caps 배열에 담는다
const caps =
texts.map(function(t) {
    return t.toUpperCase();
})
// console.log(texts); // ['wolf', 'lol', 'omg', 'cookie']
// console.log(caps); // ['WOLF', 'LOL', 'OMG', 'COOKIE']

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


// 위 객체에서 title value만 뽑은 새 배열 만들기
const movieTitles = movies.map((el)=>{
    return el.title; 
    //참고: 화살표함수에서 함수 몸체가 한줄이면 자동 return되어, (중괄호+키워드) 생략 가능
})
// console.log(movieTitles);


// ----------------------------------------------------------------------------------

/* Arrow Function */
// add1, add2는 형태만 다르고 같은 기능

const add = function(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
}

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }


/** arr func {}+return 생략 예제 **/

// 1. 중괄호+return 대신 (소괄호)로 한 줄임을 명시
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
); 

// 2. 명시적으로 한 줄 코드라면 return, 괄호 다 필요없음
const newAdd = num => num + num;
const twoAdd = (a,b) => a + b;

// ------------------------------------------------------------------------------------

/* Filter */
// filter 조건이 true일때 새 배열을 반환
const under10 = numbers.filter((num)=>{
    return num < 10;
});
console.log(under10);

// // 평점 좋은 영화 고르기
// const goodMovies = movies.filter((movie)=>{
//     return movie.score >= 90;
// })
// // 평점 좋은 영화 제목-평점만 출력하기
// const view = goodMovies.map((el) => {
//     return `${el.title} - ${el.score}`
// });

// 좋은 평점의 영화 골라서 제목-평점 출력하는 변수에 담기
const goodMovies = movies
  .filter(movie => movie.score >= 90)
  .map(movie => `${movie.title} - ${movie.score}`);

console.log(goodMovies);

// ---------------------------------------------------------------------------------

// every / some 
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

const isGood = exams.every((score) => score >= 70); // 모든 요소가 조건 만족하는지 각각 확인 -> 모두 True가 되어야 True 반환
console.log(`all score is over 70? ${isGood}`);

const over2015 = movies.some((movie) => movie.year > 2015 ); // 하나의 요소라도 조건 만족하면 -> True
console.log(`Is there any movie after 2015? ${over2015}`);
