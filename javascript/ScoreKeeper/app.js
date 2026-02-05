const p1_btn = document.querySelector("#p1_btn");
const p2_btn = document.querySelector("#p2_btn");
const reset = document.querySelector("#reset");
const p1_dp = document.querySelector("#p1_dp");
const p2_dp = document.querySelector("#p2_dp");
const winningScoreSelect = document.querySelector("#win_num");

// score 관리 변수
let p1_score = 0;
let p2_score = 0;
let winningScore = 3;
// 먼저 승점 도달 여부
let isGameOver = false;

p1_btn.addEventListener("click", function () {
  if (!isGameOver) {
    p1_score += 1;
    if (p1_score === winningScore) {
      isGameOver = true;
      p1_dp.classList.add("winner");
      p2_dp.classList.add("loser");
      p1_btn.disabled = true;
      p2_btn.disabled = true;
    }
    p1_dp.textContent = p1_score;
  }
});
p2_btn.addEventListener("click", function () {
  if (!isGameOver) {
    p2_score += 1;
    if (p2_score === winningScore) {
      isGameOver = true;
      p2_dp.classList.add("winner");
      p1_dp.classList.add("loser");
      p1_btn.disabled = true;
      p2_btn.disabled = true;
    }
    p2_dp.textContent = p2_score;
  }
});

winningScoreSelect.addEventListener("change", function (e) {
  // console.log(e.target.value)
  winningScore = parseInt(e.target.value);
});

function gameReset() {
  isGameOver = false;
  p1_score = 0;
  p2_score = 0;
  winningScore = 3;
  p1_dp.classList.remove("winner", "loser");
  p2_dp.classList.remove("winner", "loser");
  p1_btn.disabled = false;
  p2_btn.disabled = false;
  p1_dp.textContent = p1_score;
  p2_dp.textContent = p2_score;
}

reset.addEventListener("click", gameReset);
