# EXP ZINE

## Layout Templates

Use these classes on a container with `exp-layout`.

| Layout | Class | Use |
| --- | --- | --- |
| Split image left / text right | `exp-layout exp-layout--split-left` | Two-column layout, image on the left, text on the right. |
| Split image right / text left | `exp-layout exp-layout--split-right` | Two-column layout, image on the right, text on the left. |
| Fullscreen image with inset text | `exp-layout exp-layout--full` | Image fills the screen; text block sits over it (top-left inset). |
| Uneven split (3/2, image left) | `exp-layout exp-layout--split-uneven-3-2-left` | 3/2 split with image left, text right. |
| Uneven split (3/2, image right) | `exp-layout exp-layout--split-uneven-3-2-right` | 3/2 split with image right, text left. |
| Uneven split (2/3, image left) | `exp-layout exp-layout--split-uneven-2-3-left` | 2/3 split with image left, text right. |
| Uneven split (2/3, image right) | `exp-layout exp-layout--split-uneven-2-3-right` | 2/3 split with image right, text left. |
| Stacked | `exp-layout exp-layout--stacked` | Single column; image(s) and text stack vertically. |

## Basic Markup Pattern

```html
<section class="exp-layout exp-layout--split-left">
  <figure class="exp-image">
    <img src="../i/xxxxx.webp" alt="abstract mark" />
  </figure>
  <div class="exp-block">
    <p>Text goes here…</p>
  </div>
</section>
```

## Notes

- Use `exp-image` for image containers and `exp-block` for text.
- Split layouts are full-height (`100dvh`) and go full-width.
- On smaller screens, split layouts collapse to a single column.
