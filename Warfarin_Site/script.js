
function checkQuiz() {
  const selected = document.querySelector('input[name="q"]:checked');
  const feedback = document.getElementById('quizFeedback');

  if (!selected) {
    feedback.textContent = "Please choose an answer first.";
    feedback.style.color = "#7d171a";
    return;
  }

  if (selected.value === "b") {
    feedback.textContent =
      "Correct! Consistency—not complete avoidance—helps keep your INR stable.";
    feedback.style.color = "#17613a";
  } else {
    feedback.textContent =
      "Not quite. The best answer is to keep your Vitamin K intake consistent.";
    feedback.style.color = "#7d171a";
  }
}
