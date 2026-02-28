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
  idTarget.style.cursor = "pointer";
  idTarget.title = "Back to homepage";
  idTarget.setAttribute("role", "link");
  idTarget.setAttribute("tabindex", "0");

  const goHome = () => {
    window.location.assign(new URL("../index.html", window.location.href));
  };

  idTarget.addEventListener("click", () => {
    goHome();
  });

  idTarget.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goHome();
    }
  });
}
