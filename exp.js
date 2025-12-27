const body = document.body;

const bgColor = body.dataset.bgColor ? body.dataset.bgColor.trim() : "";
if (bgColor) {
  body.style.backgroundColor = bgColor;
}

const svgTemplates = [
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><rect x='18' y='18' width='244' height='144'/><circle cx='140' cy='90' r='34'/></svg>",
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><path d='M20 30h240M40 70h200M60 110h160M80 150h120'/></svg>",
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><path d='M30 150L140 30l110 120'/><circle cx='60' cy='60' r='16'/></svg>",
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><rect x='30' y='40' width='90' height='100'/><rect x='160' y='20' width='90' height='140'/></svg>",
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><path d='M20 90h240'/><path d='M60 30v120M140 30v120M220 30v120'/></svg>",
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 180' fill='none' stroke='#111' stroke-width='2'><circle cx='70' cy='60' r='30'/><circle cx='210' cy='120' r='40'/></svg>",
];

const makeImage = () => {
  const svg = svgTemplates[Math.floor(Math.random() * svgTemplates.length)];
  const img = document.createElement("img");
  img.src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
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
