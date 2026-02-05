const form = document.querySelector("#tweetForm");
const input_1 = document.querySelector("#username");
const input_2 = document.querySelector("#tweet");
const twtList = document.querySelector("#tweets");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const twt = document.createElement("li");
  //  참조 아니고 값 복사
  const userName = input_1.value;
  const userTweet = input_2.value;
  // console.log(`user:${input_1.value} / tweet:${input_2.value}`);
  twt.innerText = `${userName}: ${userTweet}`;
  twtList.appendChild(twt);
  input_1.value = "";
  input_2.value = "";
});

// 각 Li 클릭 -> 삭제 --> html에 있는 코드에만 적용(수신기 범위)
// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", function () {
//     li.remove();
//   });
// }

// ---> 이벤트 위임: ul tag의 이벤트를 delegation
twtList.addEventListener('click', function(e){
  // console.log(e.target); --> 값 확인
  e.target.nodeName ==='LI' && e.target.remove();
})