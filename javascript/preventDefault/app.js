const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

/* preventDefault : 해당 이벤트의 기본 행동 제어 */
form.addEventListener("submit", function (e) {
  // submit 이벤트의 기본 동작(폼 제출 + 페이지 새로고침)을 막음
  e.preventDefault();
  //   console.log(input.value);
  const newLi = document.createElement("li");
  newLi.innerText = input.value;
  list.appendChild(newLi);
  input.value = "";
});
