document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// input 태그 내부, 키 누르는 이벤트 객체(e) 의 key & code
// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log('key: ',e.key)
//     console.log('code: ',e.code)
// })
// 키 떼는 이벤트
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

// 화살표 키인 경우에만 콘솔에 감지 표시하기
window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})