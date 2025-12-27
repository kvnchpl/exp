const idTarget = document.querySelector(".exp-page-id");

if (idTarget) {
  const title = document.title.trim();
  idTarget.textContent = title;
}
