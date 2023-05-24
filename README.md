# Urlcollection

### Description

Web application for managing personal collection of URLs. The URLs are stored together with a description and a category in the database. The user can add, remove and modify URLs and the associated descriptions. Also the user can browse the list of URLs grouped by their categories. URL browsing is paged - URLs are displayed on pages

Prior to using the application, a user must log in with a username and password which are stored in the database).

### Version

This version of the app has as backend an API written in PHP and a basic Angular frontend.

### Running

To start the API run the command "php -S localhost:8000" outside the project folder (the folder where the "urlcollection" folder is).

To start the UI install necessary packages with "npm install" and run  "npm start" or "ng serve".

The project needs a database which can be created using the provided SQL scripts.
