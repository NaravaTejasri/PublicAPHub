# PublicAPHub #
This read me will explain the codebase,which was created to demonstrate a full-fledged application built with Vue.js including operations, routing, pagination, and more.

### What is this repository for? ###
  DTTApp is a web application which will show the list of the public APIs. User can see the public APIs list and can see the details of any API also it 
  contains random page to see a random item .This repo contains functional implementation for all the above.

### Technologies used ###
 * Vuejs
 * Typescript
 * Html&css
 * Bootstrap

### Required Software Tools ###
  * Visual Studio Code.
  * node installed  globally.

### Project Overview ###

DTT Application mainly contains Home button, categories button and a random button.
In homepage user can see 10 records of Items and that all items should be clickable to link to their detail page. It also has option for user to choose and select the Items.
The detail page shows all the details retrieved from the public API regarding the selected record .And this detail page shows 3 relevant other items based on provided data.
In the Randomizer page, the page shows a random item and also the page contains a button to show another random item.

#### Templates ####
* Layout
   * Header
   * Footer
* Pages(vue files)
   * Home
   * Categories
   * Random
   * Detailpage
   
#### How do we do it: ####
* install editorconfig globally
  * npm install -g vue-cli
* How to create project:
  * Vue create projectname
* Select all necessary configurations such as : 
  *	TypeScript
  *	Vuejs(2.x)
  *	Eslint Standard config..etc

#### How to run the application ####
##### install dependencies #####
> npm install
##### serve with hot reload at localhost:8080 #####
> npm run serve

 _In addition to above there are three external dependencies namely vue-property-decorators, Axios and Bootstarp vue._

### Project Setup ###

#### `src/assets`(This directory includes custom css) ####
  * src/assets/main.css    
#### `src/components`(This directory includes reusable vue files) ####
  *	src/components/AppNavbar.vue :
  *	src/components/AppFooter.vue
#### `src/views`(All the html templates and script files are included here) ####
  *	src/views/Home.vue
  *	src/view/Details.vue
  *	src/views/Categories.vue
  *	src/views/Random.vue
  *	src/views/Related.vue
#### `src/router`(All the router navigation is managed here) ####
  *	src/router/index.ts
#### `src/store`(All backend touchpoint implementations are managed in this directory ) ####
  *	src/store/api.ts
  *	src/store/index.ts
  *	src/store/models.d.ts
#### `src/App.vue`( router view is integrated in this file with common vue components) ####
#### `src/main.ts` ( App creation and mounting is done in this typescript file) ####
#### `src/package-lock.json`(includes all libraries used in the project)
#### `src/tsconfig.json`(It specifies the compiler options required to compile the project)

### Router Details: ###
#### Home page(URL: /home) ####
  *	Menu contains Home button, categories button and a random button.
  *	List of Public APIs.
  *	User can sort the list using sort dropdown. 
  *	Pagination is present for list of items.
#### Detail page(URL: /detail) ####
  *	Shows detailed information about selected API.
  *	Shows three relevant Items for User.
#### Categories page(URL: /categories ) ####
  *	Shows the list of categories.
#### Random page(URL: /random ) ####
  *	Randomizer page shows a random item.
  *	Randomizer page contains a button to show another random item.
  
### Backend Specs ###
All backend implementations need to adhere to our API spec.
For convenience, we have a Postman Collection that can use to test API endpoints as  to build app.

### Styles/Templates ###
Unfortunately, there isn't a common way for us to reuse & share styles/templates for cross-platform mobile apps. So for responsive web design,we need to use third part library such as Bootstrap 4. Using this library we can achieve responsivness.


