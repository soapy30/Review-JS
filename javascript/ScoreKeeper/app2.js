// app.js Code Refactoring

/* 1. p1,p2관련 각각 객체로 관리 */
const p1 = {
  score: 0,
  button: document.querySelector("#p1_btn"),
  display: document.querySelector("#p1_dp"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2_btn"),
  display: document.querySelector("#p2_dp"),
};

const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#win_num");
let winningScore = 3;
let isGameOver = false;

/* 2. p1,p2 공통 사용 가능한 제네릭 함수 생성 */
function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("winner");
      opponent.display.classList.add("loser");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// 매개변수(a,b) 사용하면 바로 실행시킴.. 나중 실행을 위해 콜백 전달
p1.button.addEventListener("click", () => {
  updateScores(p1, p2);
});
p2.button.addEventListener("click", () => {
  updateScores(p2, p1);
});

winningScoreSelect.addEventListener("change", function (e) {
  // console.log(e.target.value)
  winningScore = parseInt(e.target.value);
});

/* 3. gameReset도 제네릭화 */
function gameReset() {
  isGameOver = false;
  for (let p of [p1,p2]) {
    p.score = 0;
    p.display.classList.remove("winner","loser");
    p.display.textContent = p.score;
    p.button.disabled = false;
  }
}

reset.addEventListener("click", gameReset);
