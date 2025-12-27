const body = document.body;

const bgColor = body.dataset.bgColor ? body.dataset.bgColor.trim() : "";
if (bgColor) {
  body.style.backgroundColor = bgColor;
}

window.addEventListener("load", () => {
  body.classList.add("is-ready");
});
