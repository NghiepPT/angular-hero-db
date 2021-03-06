# angular-hero-db
This is a mean stack sample app which base on MogoDB, Express.JS, Angular4, Node Js.
http://sandan.live/index.php/2018/08/21/mean-stack-sample/
# Installing

## Step 1: Installing Nodejs

$ node -v

## Step 2:Installing Angular

We're going to use the Angular CLI to create our Angular app. Let's install it at the command line through NPM

$ npm install @angular/cli -g

Once installed, hop into the folder where you prefer to store your projects and run the following command:

$ ng new angular-hero-db

$ cd angular-hero-db

## Step 3: Setting up Express.js

$ npm install express body-parser --save

## Step 4:Setting up MongoDB

You need to visit the MongoDB Downloads page and choose the appropriate installation package based on your OS. Once you have it installed, you need to visit the MongoDB Installation documentation which will show you the necessary steps for getting MongoDB up and running on your machine.
# Create database
For instance, on Windows, you have to start MongoDB at the command prompt:

"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe"

Then, you have to open another command prompt and connect to it through the shell by running:

"C:\Program Files\MongoDB\Server\3.6\bin\mongo.exe"

Once you're in the shell, run the following commands to create a database:

$ use TourOfHerroes
$ db.users.insert({"11":"Mr. Nice"})

Here, we're creating the database and inserting at least 1 document into it.
But In my project I created a file db-management.js  to build database. You only go to command prompt and run the following commands to create a database:
$ node db-management.js
 
# Development server
Run node server for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the -prod flag for a production build.

## Running unit tests
Run ng test to execute the unit tests via Karma.

## Running end-to-end tests
Run ng e2e to execute the end-to-end tests via Protractor. Before running the tests make sure you are serving the app via ng serve.

## Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI README.
