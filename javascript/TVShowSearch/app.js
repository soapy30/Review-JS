const form = document.querySelector("#searchForm");
const imgContainer = document.querySelector("#imgContainer");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  // 추가 파라미터 작성을 위해 객체로 분리 전달(형식은 api문서 확인)
  // https://api.tvmaze.com/schedule?country=US&date=2014-12-01
  const config = { params: { q: searchTerm, country: "KR" } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  imgContainer.innerHTML = ""; // 새 요청 성공시 기존 이미지 삭제
  makeImages(res.data); // res.data IS ARRAY
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let sh of shows) {
    if (sh.show.image) {
      const img = document.createElement("img");
      img.src = sh.show.image.medium;
      imgContainer.append(img);
    }
  }
};
