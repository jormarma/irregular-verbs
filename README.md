# Irregular Verbs Quest 🌟

A Progressive Web App (PWA) game for mastering English irregular verbs, with optional bilingual (English/Spanish) support.

## Purpose

**Irregular Verbs Quest** helps learners practise the past simple and past participle forms of 87 common English irregular verbs. The verbs are organised into **18 levels** of increasing difficulty, and each level must be completed within a **5-minute time limit**. Progress and best times are saved locally in the browser so players can track their improvement.

## Features

- 🎯 **18 levels** covering 87 irregular verbs (4–5 verbs per level)
- ⏱️ **5-minute challenge** per level
- ⌨️ **Virtual on-screen keyboard** — only letters relevant to the current verb are shown, avoiding spoilers while keeping the challenge fair
- 🔁 **Retry queue** — incorrect answers are queued and shown again at the end of a round until all answers are correct
- 🏆 **Best-time tracking** per level, stored in `localStorage`
- 🌐 **Bilingual interface** — choose full English-only or English + Spanish labels
- 📱 **Installable PWA** — works offline after the first visit, can be added to the home screen on mobile or desktop
- ✨ **3D animated background** powered by [Three.js](https://threejs.org/)

## Live Demo

The app is deployed via GitHub Pages and can be accessed at:

[https://jormarma.github.io/irregular-verbs/](https://jormarma.github.io/irregular-verbs/)

## Project Structure

```
irregular-verbs/
├── assets/                  # Promotional screenshots
│   ├── 1000113138.jpg
│   └── 1000113139.jpg
├── docs/                    # Static web app (served by GitHub Pages)
│   ├── index.html           # Application shell and UI markup
│   ├── game.js              # All game logic (verb database, state, rendering)
│   ├── style.css            # Styles and responsive layout
│   ├── manifest.json        # PWA web app manifest
│   ├── sw.js                # Service worker (offline caching)
│   └── icons/               # PWA icons (192×192, 512×512, maskable variants)
│       ├── apple-touch-icon.png
│       ├── icon-192x192.png
│       ├── icon-512x512.png
│       ├── icon-maskable-192x192.png
│       └── icon-maskable-512x512.png
├── LICENSE                  # GNU GPL v3
└── README.md
```

## Dependencies

The project is a **dependency-free static site** — there is no `package.json`, no build step, and nothing to install locally. All external libraries are loaded from public CDNs at runtime:

| Library | Version | Source | Purpose |
|---------|---------|--------|---------|
| [Three.js](https://threejs.org/) | r128 | cdnjs | 3D animated background |
| [Outfit](https://fonts.google.com/specimen/Outfit) (font) | – | Google Fonts | UI typography |

The service worker (`sw.js`) caches both CDN resources after the first load so the app works offline.

## Running Locally

Because the app uses a **Service Worker**, it must be served over HTTP (not opened directly as a `file://` URL). Any static file server will work. Choose whichever option suits you:

### Option 1 — Python (no installation required)

```bash
# Python 3
python -m http.server 8080 --directory docs

# Python 2
cd docs && python -m SimpleHTTPServer 8080
```

Open <http://localhost:8080> in your browser.

### Option 2 — Node.js `serve`

```bash
npx serve docs
```

Open the URL printed in your terminal (default: <http://localhost:3000>).

### Option 3 — Node.js `http-server`

```bash
npx http-server docs -p 8080
```

Open <http://localhost:8080>.

### Option 4 — VS Code Live Server extension

1. Open the repository folder in VS Code.
2. Right-click `docs/index.html` → **Open with Live Server**.

---

> **Note:** On the first load the browser will attempt to register the service worker. If you see a console warning about the service worker scope, make sure you are serving from the `docs/` directory (not from the repository root).

## How to Play

1. **Choose your language** — English-only or bilingual (English + Spanish).
2. **Select a level** — only Level 1 is unlocked initially; completing a level unlocks the next one.
3. **Answer questions** — for each verb you will be asked both the *past simple* and the *past participle* form.
4. Use the **virtual keyboard** to type your answer, then press **Submit** (or the **Enter** key).
5. Incorrect answers are collected in a retry queue and shown again at the end of the round.
6. Complete all questions before the **5-minute timer** runs out to unlock the next level and record your best time.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).
