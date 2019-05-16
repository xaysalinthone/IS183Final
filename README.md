## Final Part 2 Instructions

## Startup
Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


The final covers your understanding of RESTful API integration and CRUD functionality. 
This application is partially complete, with the Beverages and Users module not fully integrated. You are to complete this application by following the instructions below. 

A live Applications Programming Interface (API) is integrated into this application on your behalf. Your task is to build out the CURD functionality for the Beverages and Users table. You may use the "Books" module as an example as it is fully complete in regards to Creating a new book, Udating an existing book, Getting a list of books, getting a single book and deleting a single book. (CRUD).

Before you begin, review the Books module (all the source files contained within the `books` directory) and how it is built. The "Beverages" module is already wired up on your behalf (ie. routing is in the app.module.ts. Make a mental note that the Component(s) and Service(s) for the Beverages module is already imported and added to the Declaration array and Providers array in the app.module.ts file respectively).

The Book module is fully complete and is a very good source of reference. Use the Books module as a guide to complete the "Beverages" and "Users" module. 

To complete the Beverages module, complete the following:

### Beverages List Page
1. When the user click on "Beverages" on the main navigation, the application routes to the Beverages component. Display a list of Beverages on this page (just like how Books is displayed) `(25pts)`

### Beverage Create Page
On the Beverages list page, when the user click on the "Create a Beverage", the app routes to the beverage-create page. On this page, a form is provided with a "Create Beverage" button. Wire up a click event to fire up a method to insert a beverage into the database. Upon success, redirects to the Beverages list page. `25pts`

### Beverage Update Page
On the Beverage list page, when a user click on the Beverage items (represented by a card), they are routed to the Beverage Update page where the user can update the Beverage record. Wire up the form provided to send a PUT request to the server to update the individual beverage record. `25pts`

### Delete Beverage
On the Beverage list page, when the user press the red x button, the beverage is deleted from the database. Wire up the button's click event to delete the beverage record. `25pts`

### Beverage Property To Display and Update 
``` image_url, beverage_name, alcohol_level, volume, price ```

To complete the Users module, complete the following:

### Users List Page
1. Create a "Users" tab on the main navigation. When the user click on "Users" tab on the main navigation, the application routes to the users component (Users list component). Display a list of Users on this page (just like how Books is displayed) `(25pts)`

### Users Create Page
On the Users list page, when the user click on the "Create a User", the app should routes to the user-create page. On this page, create a form with a "Create a User" button. Wire up a click event to fire up a method to insert a user into the database. Upon success, redirects to the Users list page. `25pts`

### User Update Page
On the User list page, when a user click on the user items (represented by a card), they should be routed to the User Update page where the user can update the User record. Create a User Update page e.g. "user.component.ts" and wire up the form provided to send a PUT request to the server to update the individual user record. `25pts`

### Delete User
On the User list page, when the user press the red x button, the user should be deleted from the database. create the red x button and wire up the button's click event to delete the user record. `25pts`

### User Property To Display and Update 
``` image_url, username, email ```

### Extra Credit
On the Home page, there is a section that displays "All Books". Display "All Users" and "All Beverages" on the Home page. (Hint: use component selector) `5pts`
