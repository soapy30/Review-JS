// 예상치 못한 에러처리 필수

// 함수 작성 - msg에는 string만 유효. 나머지 타입에러
// function yell (msg) {
//     console.log(msg.toUpperCase().repeat(5));
// }

// 에러처리 포함하여 다시 작성
function yell (msg) {
    try {
        console.log(msg.toUpperCase().repeat(5));
    } catch (e) {
        console.log(e); //에러메시지 그대로 출력(선택)
        console.log("Plz input a string next!");
    }
}

