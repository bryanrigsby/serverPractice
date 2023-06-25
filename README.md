# serverPractice

Steps to set up Javascript project with Express server

1) create a new repo in Github
    - check box for Add Readme
    - select Node under Add .gitignore dropdown
    - dont worry about license 
2) clone repo to local machine via Github desktop
3) open project in vs code
4) create index.html file
5) create index.js file
6) create server directory in root of project
7) create server.js file in server director


FRONTEND
1) link index.js in bottom of html just before the closing </body> with script tag
    - <script src="./index.js"></script>
    - the ./ means that the file is in the same directory

BACKEND (server)
1) make sure node is installed on your machine 
    - https://nodejs.org
2) cd into Server directory
3) in the terminal, run:
    - npm init -y 
        - this initializes your node project by creating a package.json file
    
    - npm install express
        - this is a web framework that sets up the server and routing.  basically this is the server.

    - npm install cors
        - this lets your frontend talk to your backend (server) locally

4) see serverExample.js for bare bones express server.js file

5) run the server by running the following in the terminal within your server directory:
    - node server.js
        you can find/edit this command in package.json

helpful links
1) to make objects easier to read
    - https://jsonlint.com/
2) free api that doesnt require a key
    - https://pokeapi.co/