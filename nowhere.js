const list = document.querySelector(".exp-page-list");
const debugPages = new URLSearchParams(window.location.search).has("debugPages");

if (list) {
    renderPageList(list).catch((error) => {
        console.error("Failed to render page list.", error);
        list.innerHTML = "<li>error</li>";
    });
}

async function renderPageList(target) {
    const directory = normalizeDirectory(target.dataset.directory || "x/");
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
    const fromDirectoryIndex = await getPageIdsFromDirectoryIndex(directory);

    if (fromDirectoryIndex.length > 0) {
        if (debugPages) {
            console.info("Page list source: directory index", {
                directory,
                count: fromDirectoryIndex.length,
            });
        }
        return fromDirectoryIndex;
    }

    const manifestPath = "exp.json";
    const fromManifest = await getPageIdsFromManifest(manifestPath);

    if (fromManifest.length > 0) {
        if (debugPages) {
            console.info("Page list source: manifest", {
                manifestPath,
                count: fromManifest.length,
            });
        }
        return fromManifest;
    }

    if (debugPages) {
        console.warn("No pages discovered.", { directory, manifestPath });
    }

    return [];
}

function normalizeDirectory(directory) {
    return directory.endsWith("/") ? directory : `${directory}/`;
}

async function getPageIdsFromDirectoryIndex(directory) {
    try {
        const response = await fetch(directory, { cache: "no-store" });

        if (!response.ok) {
            if (debugPages) {
                console.warn("Directory listing request failed.", {
                    directory,
                    status: response.status,
                });
            }
            return [];
        }

        const html = await response.text();
        return parsePageIdsFromHtml(html);
    } catch (error) {
        if (debugPages) {
            console.warn("Directory listing request errored.", { directory, error });
        }
        return [];
    }
}

async function getPageIdsFromManifest(manifestPath) {
    try {
        const response = await fetch(manifestPath, { cache: "no-store" });

        if (!response.ok) {
            if (debugPages) {
                console.warn("Manifest request failed.", {
                    manifestPath,
                    status: response.status,
                });
            }
            return [];
        }

        const payload = await response.json();

        if (!Array.isArray(payload)) {
            if (debugPages) {
                console.warn("Manifest format is invalid (expected array).", {
                    manifestPath,
                    payloadType: typeof payload,
                });
            }
            return [];
        }

        return uniqueSorted(
            payload
                .map((value) => String(value).trim())
                .map((value) => value.replace(/\.html$/i, ""))
                .filter(Boolean),
        );
    } catch (error) {
        if (debugPages) {
            console.warn("Manifest request errored.", { manifestPath, error });
        }
        return [];
    }
}

function parsePageIdsFromHtml(html) {
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
}

function uniqueSorted(values) {
    return [...new Set(values)].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: "base" }),
    );
}
