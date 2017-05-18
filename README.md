## Instructions

## Startup
Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


The final covers your understanding of RESTful API integration and CRUD functionality. 
This application is partially complete, with the Tanks and Users module not fully integrated. You are to complete this application by following the instructions below. 

An Applications Programming Interface (API) is integrated into this application on your behalf. Your task is to build out the CURD functionality for the Tanks and Users table. You may use the "Books" module as an example because it is fully complete in regards to Creating a new book, Udating an existing book, Getting a list of books, getting a single book and deleting a single book. (CRUD).

Before you begin, review the Books module (all the source files contained within the `books` directory) and how it was built. The "Tanks" module is already wired up on your behalf (ie. routing is in the app.module.ts. Also make a mental note that the components for the Tanks module is declared in the Declaration block and the TankService is declared in the Providers block of the app.module.ts file).

The Book module is fully completed as far as CRUD functionality and is a very good source of reference. Use the Books module as a guide to complete the "Tanks" and "Users" module. 

To complete the Tanks module, complete the following:

### Tanks List Page
1. When the user click on "Tanks" on the main navigation, the application routes to the tanks component. Display a list of Tanks on this page (just like how Books is displayed) `(25pts)`

### Tank Create Page
On the Tanks list page, when the user click on the "Create a Tank", the app routes to the tank-create page. On this page, a form is provided with a "Create Tank" button. Wire up a click event to fire up a method to insert a tank into the database. Upon success, redirects to the Tanks list page. `25pts`

### Tank Update Page
On the Tank list page, when a user click on the Tank items (represented by a card), they are routed to the Tank Update page where the user can update the Tank record. Wire up the form provided to send a PUT request to the server to update the individual tank record. `25pts`

### Delete Tank
On the Tank list page, when the user press the red x button, the tank is deleted from the database. Wire up the button's click event to delete the tank record. `25pts`

To complete the Users module, complete the following:

### Users List Page
1. Create a "Users" tab on the main navigation. When the user click on "Users" tab on the main navigation, the application routes to the users component (Users list component). Display a list of Users on this page (just like how Books is displayed) `(25pts)`

### Users Create Page
On the Users list page, when the user click on the "Create a User", the app should routes to the user-create page. On this page, create a form with a "Create a User" button. Wire up a click event to fire up a method to insert a user into the database. Upon success, redirects to the Users list page. `25pts`

### User Update Page
On the User list page, when a user click on the user items (represented by a card), they should be routed to the User Update page where the user can update the User record. Create a User Update page e.g. "user.component.ts" and wire up the form provided to send a PUT request to the server to update the individual user record. `25pts`

### Delete Tank
On the USer list page, when the user press the red x button, the user should be deleted from the database. create the red x button and wire up the button's click event to delete the user record. `25pts`

### Extra Credit
On the Home page, there are two section that displays "Books Available" and  "Tanks Available". Create another section called "Active Users" and display a list of users on the Home page. `15pts`

Additional styling `10pts`;

