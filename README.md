# Slug Generator – Chrome Extension

Simple Chrome extension that gives you a url safe string based on a regular string.

---

##  Features

- Convert titles or phrases into URL-safe slugs  
- Automatic removal of special characters  
- Diacritic stripping (á → a, ñ → n, é → e, etc.)  
- One-click or Enter-key generation  
- Automatically copies the slug to your clipboard  
- Fully keyboard accessible  
- WCAG-conformant markup  
- Clean, minimal popup UI  
- Optimized for Chrome Manifest V3  

---

## Installation (Developer Mode)

1. Download or clone this repository  
2. Open Chrome and go to:  
   **chrome://extensions**
3. Enable **Developer mode**  
4. Click **Load unpacked**  
5. Select the project folder  
6. The extension will appear in your toolbar  

---

## Files

slug-generator-extension/
│
├── manifest.json # Chrome extension config (MV3)
├── popup.html # Extension popup UI
├── popup.js # Slug generator logic + clipboard
├── popup.css # Popup styling
│
└── icons/ # Required extension icons
├── icon16.png
├── icon32.png
├── icon48.png
└── icon128.png


---

## How It Works

1. Enter a title or phrase  
2. Press **Enter** or click **Generate**  
3. The extension:
   - Lowercases the text  
   - Removes special characters  
   - Strips accents  
   - Replaces spaces with `-`  
   - Collapses repeated dashes  
4. The final slug appears in the second field  
5. The slug is automatically copied to your clipboard  

---

## Example

| Input                        | Output            |
|------------------------------|-------------------|
| `My First Amazing Article!` | `my-first-amazing-article` |
| `Página de Información`     | `pagina-de-informacion`    |

---

## Accessibility

- Proper semantic HTML structure  
- `label` / `for` pairing  
- `aria-readonly`, `aria-live`, and proper role semantics  
- Keyboard-friendly form submission  
- High-contrast, minimal UI  

This extension is fully usable without a mouse.

---


