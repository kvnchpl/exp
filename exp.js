const idTarget = document.querySelector(".exp-page-id");

if (idTarget) {
  const title = document.title.trim();
  idTarget.textContent = title;
}

document.addEventListener("contextmenu", (event) => {
  if (event.target && event.target.closest("img")) {
    event.preventDefault();
  }
});

document.addEventListener("dragstart", (event) => {
  if (event.target && event.target.closest("img")) {
    event.preventDefault();
  }
});
