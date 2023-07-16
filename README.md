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
    - node server.js or npm start
        you can find/edit this command in package.json

helpful links
1) to make objects easier to read
    - https://jsonlint.com/
2) free api that doesnt require a key
    - https://pokeapi.co/



steps to set up mysql locally (on machine)

1) download and install mysql community version
    - https://dev.mysql.com/downloads/mysql/
    - helpful video - https://www.youtube.com/watch?v=u96rVINbAUI

2) download and install mysql workbench
    - https://dev.mysql.com/downloads/workbench/

-  to run mysql in terminal on mac 
    - /usr/local/mysql/bin/mysql -u root -p  
    - helpful video - https://www.youtube.com/watch?v=CBtBZgmP22M&t=1073s

- to run mysql in command line on windows
    - helpful video - https://www.youtube.com/watch?v=CDWrNLHyUWs&t=1s
    - helpful link - techbrothersit.com/2018/11/how-to-connect-from-windows-command.html

**TODO - put instructions on how to interact with local mysql db


loop and function practice with json 'database'

1) import database into server.js 
    - import { employees } from './database/employees';

2) write funtions to do the complete the following tasks
    - display all employee objects
    - display employees by name
    - display total number of employees
    - display employees who are older than 30
    - display all male employees
    - display all employees from Sales department
    - display just the departments
    - display each department only once with the number of employees in each department next to it
    - create a contact card for each employee that includes name, email, and department