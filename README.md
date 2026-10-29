# LinkSwift

An English-only static frontend for checking the format of a 123 Cloud Drive sharing URL and opening the original share page.

## Features

- Responsive, dark interface
- URL syntax validation
- Opens the original sharing page in a new tab
- No account credentials or pasted URLs are sent to a server by this frontend
- Works as a static GitHub Pages site

## Important limitation

This project does **not** resolve private share links or generate direct download URLs. A static GitHub Pages site cannot securely run server-side code or keep API secrets. Direct-download support requires an officially supported API or a separate backend, plus any required access permissions. Do not enter your cloud-drive password into this page.

## Publish with GitHub Pages

1. Create a new repository on GitHub named `LinkSwift`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then click **Save**.
6. Wait for deployment and open the URL shown in the Pages section. It will usually look like `https://YOUR-USERNAME.github.io/LinkSwift/`.

## Run locally

Open `index.html` in a modern browser. No build tools are required.
