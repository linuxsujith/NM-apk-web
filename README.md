# NEWMO Landing Page

This is the premium frontend application for the NEWMO project. It serves as a modern, high-converting landing page to push users toward downloading the NEWMO APK.

## Features Built
- **Responsive Dark Theme Strategy:** Built entirely from scratch using HTML, CSS, and JS ensuring zero bloat. Flawless on both desktop and mobile.
- **Auto Download Trigger:** Intelligently triggers maximum programmatic possibilities to execute the APK path directly using JavaScript logic.
- **Section Rich:** Includes an animated hero section, value-driven skill grids, timeline-based roadmap mockups, daily news previews, statistics, and FAQs.

## Local Development
To run this project locally, simply start a basic HTTP server inside this directory.

If you have Node.js installed, use `npx`:
```bash
npx serve .
```

If you prefer Python (installed by default on macOS and most Linux distros):
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Deployment Instructions

### Vercel (Recommended)
1. Commit the `newmo` folder to a GitHub repository.
2. Log into [Vercel](https://vercel.com).
3. Click **Add New** > **Project**.
4. Import your GitHub repository.
5. In the configuration settings, leave the framework preset as "Other/Vanilla". Ensure the root directory matches where `index.html` is located.
6. Click **Deploy**. Vercel will instantly publish the static site.

### Netlify
1. Log into [Netlify](https://www.netlify.com/).
2. You can literally drag and drop the entire `newmo` folder into the Netlify "Sites" area to immediately launch a manual deploy.
3. Alternatively, link Netlify to your GitHub repository similarly to Vercel, and simply click "Deploy Site".
