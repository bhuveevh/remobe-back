VACANCY HAI. BACKGROUND CHANGE
A web-based tool to change the background color of passport-sized photos, designed with a modern macOS-like UI.
Features

Upload passport photos via drag-and-drop or file input.
Select a custom background color using a color picker.
Preview and download the modified image.
Responsive and sleek UI with a macOS-inspired design.

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/vacancy-hai-background-change.git
cd vacancy-hai-background-change


Serve the Application:

Use a local server (e.g., VS Code Live Server, or run npx serve).
Alternatively, open index.html directly in a browser (note: some features like file upload may require a server due to security restrictions).


Dependencies:

No installation required! The app uses CDN-hosted p5.js and Tailwind CSS.



Hosting on GitHub Pages

Push the repository to GitHub:git add .
git commit -m "Initial commit"
git push origin main


Enable GitHub Pages in the repository settings:
Go to Settings > Pages.
Select the main branch and / (root) folder.
Save, and GitHub will provide a URL (e.g., https://your-username.github.io/vacancy-hai-background-change).



Usage

Open the app in a browser.
Drag and drop a passport photo or click to upload.
Choose a background color using the color picker.
Click "Apply Background" to process the image.
Click "Download Image" to save the modified photo.

Notes

The background replacement uses a simple threshold-based approach (detects light backgrounds). For better accuracy, consider integrating an API like remove.bg (requires an API key).
Ensure images are high-quality passport photos for best results.

License
MIT License
