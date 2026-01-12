// setTimeout함수는 콜백함수와 밀리초를 인자로 받아 고유 id넘버를 반환
// const myId = setTimeout(()=>{
//     console.log("pota is my slave");
// }, 3000);

// const myId2 = setTimeout(()=>{
//     console.log("pota love cats!");
//     // clearTimeout(myId);
// }, 2000);

let count = 0;
function pota() {
  count++;
  console.log(`Pota loves.. SNE!! ${new Date()}`);
  if (count === 5) {
    clearInterval(id);
  }
}
// 미리 정의된 함수를 콜백함수로 사용, 종료시점 입력
const id = setInterval(pota, 3000);
