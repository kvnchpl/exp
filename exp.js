const idTarget = document.querySelector(".exp-page-id");

if (idTarget) {
  const title = document.title.trim();
  const normalized = title.toLowerCase();
  idTarget.textContent = normalized.startsWith("exp ")
    ? normalized
    : `exp ${normalized}`;
}
