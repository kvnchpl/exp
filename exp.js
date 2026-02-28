const TITLE_PREFIX = "EXP | ";
const idTarget = document.querySelector(".exp-page-id");
const returnLink = document.querySelector(".exp-return");

function isPlainLeftClick(event) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey
  );
}

if (returnLink) {
  returnLink.addEventListener("click", (event) => {
    if (!isPlainLeftClick(event)) {
      return;
    }

    event.preventDefault();

    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign(returnLink.href);
  });
}

if (idTarget) {
  const title = document.title.trim();
  const pageId = title.startsWith(TITLE_PREFIX)
    ? title.slice(TITLE_PREFIX.length)
    : title;

  idTarget.textContent = pageId;
  if (idTarget instanceof HTMLAnchorElement) {
    idTarget.href = new URL("../", window.location.href).href;
  }
}
