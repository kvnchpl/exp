EXP ZINE

Layout templates

Use these classes on a container with class `exp-layout`.

Split image left / text right
Class: `exp-layout exp-layout--split-left`
Use: two-column layout, image on the left, text on the right.

Split image right / text left
Class: `exp-layout exp-layout--split-right`
Use: two-column layout, image on the right, text on the left.

Fullscreen image with inset text
Class: `exp-layout exp-layout--full`
Use: image fills the screen; text block sits over it (top-left inset).

Uneven split (3/2 columns, image left)
Class: `exp-layout exp-layout--split-uneven-3-2-left`
Use: 3/2 split with image left, text right.

Uneven split (3/2 columns, image right)
Class: `exp-layout exp-layout--split-uneven-3-2-right`
Use: 3/2 split with image right, text left.

Uneven split (2/3 columns, image left)
Class: `exp-layout exp-layout--split-uneven-2-3-left`
Use: 2/3 split with image left, text right.

Uneven split (2/3 columns, image right)
Class: `exp-layout exp-layout--split-uneven-2-3-right`
Use: 2/3 split with image right, text left.

Stacked
Class: `exp-layout exp-layout--stacked`
Use: single column; image(s) and text stack vertically.

Basic markup pattern

```html
<section class="exp-layout exp-layout--split-left">
  <figure class="exp-image">
    <img src="../i/xxxxx.webp" />
  </figure>
  <div class="exp-block">
    <p>Text goes here…</p>
  </div>
</section>
```

Notes
- Use `exp-image` for image containers and `exp-block` for text.
- Split layouts are full-height (`100dvh`) and go full-width on the `x/` pages.
- On smaller screens, split layouts collapse to a single column.
