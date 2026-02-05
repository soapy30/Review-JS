/* 1. 빨 - 주 - 노 순으로 순차실행 원함 */
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red';
// }, 1000);

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'orange';
// }, 2000);

// setTimeout(()=>{
//     document.body.style.backgroundColor = 'yellow';
// }, 3000);

/* 2. 중첩 작성 권장 */
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "lightgreen";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/* 3. 제네릭 함수로 작성 */
const delayColorChange = (nextColor, delay, callbackFunc) => {
  setTimeout(() => {
    document.body.style.backgroundColor = nextColor;
    callbackFunc && callbackFunc();
  }, delay);
};

/* 제네릭 함수 사용해서 2번 중첩 재작성 */
delayColorChange("red", 1000, () => {
  delayColorChange("orange", 1000, () => {
    delayColorChange("yellow", 1000, () => {
      delayColorChange("green", 1000, () => {
        delayColorChange("blue", 1000, () => {
          delayColorChange("darkblue", 1000, () => {
            delayColorChange("purple", 1000);
          });
        });
      });
    });
  });
});

/* 문제, 언제 끝날지 모르는 작업의 콜백 등록.. --> PROMISE 사용 *
searchMovieAPI(()=>{
    // if it works
}, ()=>{
    // if it doesn't work
})
*/
