MY LITTLE JOURNAL — BEGINNER SETUP

WHAT IS INCLUDED
- index.html: the website structure and page content
- css/style.css: colours, layout, fonts and responsive design
- js/posts.js: the blog posts (edit this file to add stories)
- js/script.js: category filters, mobile menu and reading popup

1. OPEN THE WEBSITE ON YOUR COMPUTER
- Extract the ZIP file.
- Open the extracted "my-little-journal" folder in Visual Studio Code.
- In VS Code, install the "Live Server" extension if you do not already have it.
- Right-click index.html and choose "Open with Live Server".
- Your browser should open the website. If it does not, right-click index.html and open it in your browser.

2. PERSONALIZE IT
- Open index.html and change the About Me text.
- Find hello@example.com in index.html and replace it with your email address.
- Open js/posts.js to edit the sample stories.
- To add a story, copy one complete object (from { to }), paste it inside blogPosts, add a comma between objects, and change title, category, date, image, excerpt and body.
- Category must be exactly one of:
  Personal stories
  College life
  Travel & lifestyle
  Swimming journey
  Technology & projects
- Use a direct image URL for the image field. You can also use your own image after adding it to a folder such as images/ and using "images/your-photo.jpg".

3. PUBLISH FREE WITH GITHUB PAGES
- Sign in to GitHub and create a NEW repository named my-little-journal.
- Choose Public. Do not add a README, .gitignore or license during repository creation.
- Open the repository and choose Add file > Upload files.
- Upload the CONTENTS of the extracted my-little-journal folder (index.html, css folder, js folder and README.txt). Do not upload only the ZIP file.
- Commit the upload.
- In the repository, open Settings > Pages.
- Under Build and deployment, choose "Deploy from a branch".
- Select branch "main" and folder "/ (root)", then Save.
- Wait a few minutes. Refresh the Pages section; GitHub will show your live website address.
- Your website will be at https://YOUR-GITHUB-USERNAME.github.io/my-little-journal/

IMPORTANT
- This is a static website. It does not have a private admin dashboard or database.
- To publish a new post, edit js/posts.js on GitHub (or on your computer), save/commit the changes, and GitHub Pages will update the website.
- The sample posts are placeholders. Replace them with your own experiences before sharing the site.
- Google Fonts and the sample Unsplash photos need an internet connection.
