const TITLE_PREFIX = "EXP | ";
const idTarget = document.querySelector(".exp-page-id");

if (idTarget) {
  const title = document.title.trim();
  idTarget.textContent = title.startsWith(TITLE_PREFIX)
    ? title.slice(TITLE_PREFIX.length)
    : title;
}
