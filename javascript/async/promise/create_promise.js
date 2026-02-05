/* new promise 작성법
 new Promise ((resolve, reject)=>{
 })
 */

/* Fake요청 함수에서 promise return */
// const fakeRequest = (url) => {
//   // promise 객체를 리턴
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('입장완료!');
//     }, 2000);
//   });
// };

/* 요청 성공/실패 랜덤 넘버로 구현 */
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve(`입장 성공! uri is - ${url}`);
      } else {
        reject("입장 실패");
      }
    }, 2000);
  });
};

/* Fake요청 함수 실행 - url,성공,실패 작성 */
fakeRequest("findingcats/page1")
  .then((data) => {
    console.log("Request Succeed. page1");
    console.log("data is", data);
  })
  .catch((err) => {
    console.log(err);
  });

/* 콜백 지옥 예시로 사용한 delayColorChange Promise로.. */
//
const delayColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

/*
delayColorChange("red", 1000)
  .then(() => delayColorChange("orange", 1000)) //암시적 return (중괄호+return 함께 생략)
  .then(() => delayColorChange("yellow", 1000))
  .then(() => delayColorChange("green", 1000))
  .then(() => delayColorChange("blue", 1000))
  .then(() => delayColorChange("darkblue", 1000))
  .then(() => {
    return delayColorChange("purple", 1000);
  }); // 명시적 return
*/

/* .then(callbackFunc) 대신, await 키워드 사용할 수 있다 */
const rainbow = async () => {
  await delayColorChange("red", 1000);
  await delayColorChange("orange", 1000);
  await delayColorChange("yellow", 1000);
  await delayColorChange("green", 1000);
  await delayColorChange("blue", 1000);
  await delayColorChange("darkblue", 1000);
  await delayColorChange("purple", 1000);
};

async function printRainbow () {
    await rainbow();
    console.log("END OF RAINBOW");
}

async function makeTwoReq () {
    try {
    let data1 = await fakeRequest('page1');
    let data2 = await fakeRequest('page2');
    console.log(data1);
    console.log(data2);
    } catch (e){
        console.log(e)
    }
   
}