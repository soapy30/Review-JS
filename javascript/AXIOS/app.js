/* 기본 사용 */
// axios.get("https://swapi.dev/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERR: ", e);
//   });

/* 비동기 함수로 리팩터링 */
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log(res.data.name);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

// ---------------------------------------------------------

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

/* header 작성 포함하여 아재개그 랜덤으로 받아오기 */
const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    console.log("ERR!", e);
    return "No Jokes anymore"
  }
};

const showJoke = async () => {
  const newJoke = await getDadJoke();
  const newLI = document.createElement("li");
  newLI.append(newJoke);
  jokes.append(newLI);
};

button.addEventListener("click", showJoke);
