const button = document.querySelector("#btn");
const h1 = document.querySelector("h1");

function makeRandomColor() {
  // rgb(250,120,58);
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function viewUpdate() {
  // 새 컬러 생성 함수의 return - 새 컬러
  const newColor = makeRandomColor();
  document.body.style.backgroundColor = newColor;
  // h1 tag 내용도 색상 표시
  h1.innerText = newColor;
}

button.addEventListener("click", viewUpdate);
