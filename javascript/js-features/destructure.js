/** 배열의 구조분해 **/
const scores = [900, 860, 800, 780, 720, 640, 620, 540];

const [gold, silver, bronze, ...eveyone] = scores;
// console.log(gold); //900
// console.log(silver); //860
// console.log(bronze); //800
console.log(eveyone); //[780, 720, 640, 620, 540]

/** 객체의 구조분해 **/
const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMiTh",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors",
  city: "San Francisco",
  state: "California",
};

// const first = user.firstName;
// const last = user.lastName;
/* user 객체 기반의 새 변수 3개를 만든 것 */
// const { firstName, lastName, email } = user;
/* 꺼내서 새 변수 이름 지어주기 */
const { born: birthYear } = user;
const { died: deathYear } = user;
// console.log(born); //undefined
console.log(birthYear); //1930
console.log(deathYear); //1978

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1997,
  city: "Tulsa",
  state: "Oklahoma",
};

const { born, city, died, silly = "N/A" } = user2; // default도 user2에도 없는 died만 undefined.

/** 매개변수(param) 구조분해 **/
// ---------------------------------------------------------------
// function fullName (user) {
//     return `${user.firstName} ${user.lastName}`
// }
// function fullName (user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }
// user에서 다른 정보 출력 계획 없고, 위 두개만 사용한다면..
function fullName({ firstName, lastName }) {
  //--> 매개변수 구조분해
  return `${firstName} ${lastName}`;
}

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// const goodMov = movies.filter((mov) => mov.score >= 80);
const goodMov = movies.filter(({score}) => score >= 80);

// 뽑아서 바로 이름만..
const goodMovieNames = 
movies.filter(({score}) => score >= 80).map((el)=> el.title); // ['Amadeus', 'Stand By Me', 'Parasite', 'Alien']

