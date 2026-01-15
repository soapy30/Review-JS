/* tag name
에 해당하는 것들을 다 찾아옴 */
const allImages = document.getElementsByTagName('img');
// HTML Collection을 return
// 배열은 아니지만, 반복가능하고 길이도 가짐(유사)

// for (let img of allImages) {
//     // 모든 이미지 태그를 아래 이미지로 교체
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

/* classname
에 해당하는 것들을 다 찾아옴 */
const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }


/* QuerySelector
-> CSS문법 적용 */
const links = document.querySelectorAll('p a');
// console.log(links[0].href)
// for (let link of links) {
//     console.log(link.href)
// }

// document.querySelector('p').innerText = 'wow im ding ding mom'; --> 곧바로 첫 문단 내용 교체
const content = document.querySelector('p').textContent; // console에서 확인

// innerHTML (cf.innerText)
// document.querySelector('#title').innerHTML = `<i>gamza chicken</i>`;
document.querySelector('#title').innerHTML += `<i>&nbsp;gamza!!</i>`; //기존 내용에 연결도 가능

// ==================================================================================

/* 속성에 접근 --> 교체 */
const firstImg = document.querySelector('img');
firstImg.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
firstImg.setAttribute('alt', 'chicken');


/* 스타일 객체 접근하여 변경 */
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.style.color = `#006CFF`;
    link.style.textDecorationColor = `magenta`;
}