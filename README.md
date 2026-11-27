# ftchen93.github.io

Personal site and blog of Fun Tat Chen (FtChen). Plain HTML and CSS with no build step, so GitHub Pages serves it as-is.

## Layout

- `index.html` is the home page (intro, about, post list, contact).
- `posts/*.html` holds one file per post.
- `assets/style.css` is the shared stylesheet (light and dark themes).
- `assets/theme.js` is the dark-mode toggle.
- `404.html` is the not-found page.

## Adding a post

1. Copy an existing file in `posts/` and edit the title, date and body.
2. Add a `<li class="post-item">` entry for it in the Writing section of `index.html`.
3. Commit and push to `master`.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
