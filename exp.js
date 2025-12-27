const body = document.body;

const bgColor = body.dataset.bgColor ? body.dataset.bgColor.trim() : "";
if (bgColor) {
  body.style.backgroundColor = bgColor;
}

const imageRoot = window.location.pathname.includes("/x/") ? "../i/" : "i/";
const imageSources = [
  `${imageRoot}mark-01.svg`,
  `${imageRoot}mark-02.svg`,
  `${imageRoot}mark-03.svg`,
  `${imageRoot}mark-04.svg`,
  `${imageRoot}mark-05.svg`,
  `${imageRoot}mark-06.svg`,
];

const makeImage = () => {
  const img = document.createElement("img");
  img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
  img.alt = "abstract mark";
  img.loading = "lazy";
  return img;
};

const makeFigure = () => {
  const figure = document.createElement("figure");
  figure.className = "exp-image";
  figure.appendChild(makeImage());
  return figure;
};

const placeImages = () => {
  const containers = document.querySelectorAll(".exp-flow");
  containers.forEach((container) => {
    const count = Number.parseInt(container.dataset.imageCount || "2", 10);
    if (!Number.isFinite(count) || count <= 0) {
      return;
    }
    for (let i = 0; i < count; i += 1) {
      const figure = makeFigure();
      const insertAt = Math.floor(Math.random() * (container.children.length + 1));
      const refNode = container.children[insertAt] || null;
      container.insertBefore(figure, refNode);
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  placeImages();
  body.classList.add("is-ready");
});
