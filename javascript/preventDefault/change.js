const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener('change', function(e) {
//     console.log(e, "change event - 영역에서 벗어날때 감지");
// })

// input 값 변경을 실시간으로 감지
input.addEventListener("input", function (e) {
  // console.log(e, "input event - input내부 모든 이벤트 감지");
  // h1.innerText = e.data;
  h1.innerText = input.value;
});
