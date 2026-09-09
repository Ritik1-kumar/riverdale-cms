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

Step 3: we are using namecheap hosting you can use any of your hosting provider
    open c-panel
        create a domain  (in file manager check folder created automaticall with same name)
        make database in database wizard
            create user and assign it to that database
        now create a node.js app 
            node version matching package.json node version
            use production or development which you see fit
            in application root use the folder name which shows in file manager when you create domain
            in application url set the domain by selecting
            then next file one write server.js
        Now upload files
            Open file manager and open the folder which have been created
                Option 1:-  With Node Modules
                    make zip of your local project and upload it there
                    unzip it and move all into parent
                Option 2:- Without node Modules
                    make zip of your local project without node modules and upload it there
                    unzip it and move all into parent
                Option 3:- github
                    make repo and upload all to github
                    open terminal and use git clone for adding 
        Open file manager and open the folder which have been created        
            in env change   (check database and username first as it adds some suffix or prefix automatically)
                DATABASE_CLIENT=mysql  (if using mysql if using postgres or any other change that and port accordingly)
                DATABASE_HOST=localhost
                DATABASE_PORT=3306
                DATABASE_NAME=your_database_name
                DATABASE_USERNAME=your_username
                DATABASE_PASSWORD=your_password
                DATABASE_SSL=false
        go to nodejs app click pencil icon 
            if uploaded with node modules then simple restart app
            if uploaded otherwise 
                open terminal 
                copy paste virtual environmet command at top naming source
                do npm install and npm run build
                restart the app