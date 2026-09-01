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
    
    First: create the Postgres database (if you haven't yet)
        Click + Create new service (or + New at top right)
        Choose PostgreSQL
        Give it a name (e.g. riverdale-db)
        Select the Free plan
        Click Create Database
        Once created, go to its page → Connections section → copy the Internal Database URL (you'll need it in a minute)

    Then: create the Web Service
        Click + Create new service again → Web Service
        Connect your GitHub repo (the Strapi project one)
        Fill in:
        Name: your project name
        Region: same region as your Postgres DB (important — internal URLs only work within the same region)
        Branch: main
        Build Command: npm install && npm run build
        Start Command: npm run start
        Scroll to Instance Type → select Free ($0/month)
    
    Then: Environment Variables section
        Add these (this is where you paste the Internal Database URL from your Postgres instance):

        Name	                                Value
        DATABASE_CLIENT	                        postgres
        DATABASE_URL	                        (Internal Database URL you copied)
        DATABASE_SSL	                        true
        DATABASE_SSL_REJECT_UNAUTHORIZED	    false
        NODE_ENV	                            production
        APP_KEYS	                            (from your local .env)
        API_TOKEN_SALT	                        (from your local .env)
        ADMIN_JWT_SECRET	                    (from your local .env)
        JWT_SECRET	                            (from your local .env)
        TRANSFER_TOKEN_SALT	                    (from your local .env)

    Use Add from .env to bulk-paste your local .env, 
    then manually fix DATABASE_CLIENT to postgres and add the DATABASE_URL/SSL vars since those aren't in your local file.

Then deploy
    Click Deploy web service at the bottom, and watch the Logs tab. Let me know what shows up there once it finishes building.