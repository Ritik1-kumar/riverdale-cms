Step 1: Create the Strapi project
    npx create-strapi-app@latest rebello-cms --quickstart

** Remeber to save **
Step 2: Build the Components
    In the Strapi admin: Content-Type Builder → Components → Create new component
    Create a new category called sections, then add components one at a time

Step 3: Build the Homepage Single Type
    Content-Type Builder → Single Types → Create new single type → name it Homepage.

Step 4: Build the Global Single Type (header, footer, phone — shared on every page)

** Remember to Publish as you will not be shown content otherwise **
Step 5: Enter your content
    Go to Content Manager → Homepage (and Global), 
    fill in every field with the real text/images from your design, and click Save then Publish 
    (Strapi keeps content in Draft until you publish it).

Step 6: Creating api (permissions)
    Settings → Users & Permissions Plugin → Roles → Public
    Check the box for find (and findOne if present) on created single types ones example: homepage, global etc.

For starting server run
    npm run develop


****
For Living project
****

Step 1: Install the pg driver:
    npm install pg

Step 2:Create a git repo 
    git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.com/yourusername/your-repo.git
    git branch -M main
    git push -u origin main

Step 3: Create a free Web Service on Render
    Go to render.com, sign up/log in
    Create a new Project
    Click New → Web Service
    Connect your GitHub account, select your Strapi repo
    Fill in:
    Name: whatever you want the service called
    Region: closest to you
    Branch: main
    Build Command: npm install && npm run build
    Start Command: npm run start
    Instance Type: Free
    Don't click "Create Web Service" yet — do Step 4 first (env vars), then create it.