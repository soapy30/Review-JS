async function hello() {
  console.log("hi");
}

const login = async (username, password) => {
  // throw는 err를 return하는 것과 유사
  if (!username || !password) {
    throw "값이 다 들어오지 않음";
  }
  if (password === "seonyang") {
    return { msg: "환영합니다", name: username };
  } else {
    throw "패스워드 틀림";
  }
};

login("gamza", "seonyang")
  .then((result) => {
    console.log(`${result.name}님, 로그인되었습니다.`);
    console.log(`MSG: ${result.msg}`);
  })
  .catch((err) => {
    console.log("에러");
    console.log(err);
  });
