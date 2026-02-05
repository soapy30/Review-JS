// "https://swapi.dev/api/planets/1/" 에서 GET 받기

const req = new XMLHttpRequest();

// 성공시 callback
req.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log("IT LOADED!!!");
  console.log(data);
  console.log(data.name);
};
// 실패시 callback
req.onerror = function () {
  console.log("ERROR !!!");
  console.log(this);
};

// open
req.open("GET", "https://swapi.dev/api/planets/1/");
// send
req.send();
