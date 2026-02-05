const btn2 = document.querySelector("#v2");
btn2.onclick = function () {
  console.log("You Clicked Me!");
};

function scream() {
  console.log("You touched me..");
  console.log("Don't Touch ME!! lolol");
}
btn2.onmouseenter = scream;

// 이벤트당 콜백함수 하나만 처리
document.querySelector('h1').onclick = () => {
    alert("you clicked h1 element!!");
}

// 콜백함수 여러개 받을 수 있음
document.querySelector('#v3').addEventListener('click',function(){
    alert('You Clicked Me - 3 Button!!')
})

/* 콜백함수 2개 예시 - TASbtn */
function twist () {
    console.log('TWIST!!');
}
function shout () {
    console.log('SHOUT!!');
}

const tas = document.querySelector('#tas');
// tas.onclick = twist;
// tas.onclick = shout; --> shout만 계속 출력됨. 이 함수라고 덮어썼기 때문

tas.addEventListener('click',twist, {once:true}); // 지원하는 매개변수도 다양
tas.addEventListener('click',shout);