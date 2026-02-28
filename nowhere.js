const list = document.querySelector(".exp-page-list");

if (list) {
    renderPageList(list).catch((error) => {
        console.error("Failed to render page list.", error);
        list.innerHTML = "<li>error</li>";
    });
}

async function renderPageList(target) {
    const directory = target.dataset.directory || "x/";
    const pageIds = await getPageIds(directory);

    if (pageIds.length === 0) {
        target.innerHTML = "<li>nothing</li>";
        return;
    }

    const markup = pageIds
        .map((id) => `<li><a href="${directory}${id}.html">${id}</a></li>`)
        .join("");

    target.innerHTML = markup;
}

async function getPageIds(directory) {
    try {
        const response = await fetch(directory, { cache: "no-store" });

        if (!response.ok) {
            return [];
        }

        const html = await response.text();
        const documentFragment = new DOMParser().parseFromString(html, "text/html");
        const links = [...documentFragment.querySelectorAll("a[href]")];
        const ids = links
            .map((link) => link.getAttribute("href") || "")
            .map((href) => href.trim())
            .filter((href) => href.endsWith(".html"))
            .map((href) => href.split("/").pop() || "")
            .map((fileName) => fileName.replace(/\.html$/i, ""))
            .filter(Boolean);

        return uniqueSorted(ids);
    } catch {
        return [];
    }
}

function uniqueSorted(values) {
    return [...new Set(values)].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" }),
    );
}
