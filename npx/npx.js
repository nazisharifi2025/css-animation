const likeButtons = document.querySelectorAll(".like-btn");

for (let i = 0; i < likeButtons.length; i++) {
  const btn = likeButtons[i];
  const wrapper = btn.parentElement;
  const countSpan = wrapper.children[1];

  btn.addEventListener("click", () => {
    let liked = btn.dataset.liked === "true";

    if (liked) {
      btn.textContent = "🤍";
      btn.dataset.liked = "false";
      countSpan.textContent = "0";
    } else {
      btn.textContent = "❤️";
      btn.dataset.liked = "true";
      countSpan.textContent = "1";
    }
  });
}
