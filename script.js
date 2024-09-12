document.querySelectorAll(".question-box").forEach((box) => {
  const answer = box.querySelector(".answer");
  const plusIcon = box.querySelector(".icon-plus");
  const minusIcon = box.querySelector(".icon-minus");

  // Set initial state
  answer.style.display = "none";
  minusIcon.style.display = "none";

  box.addEventListener("click", () => {
    if (answer.style.display === "none") {
      answer.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      answer.style.display = "none";
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});
