# Urlcollection

### Description

Web application for managing personal collection of URLs. The URLs are stored together with a description and a category in the database. The user can add, remove and modify URLs and the associated descriptions. Also the user can browse the list of URLs grouped by their categories. URL browsing is paged - URLs are displayed on pages

Prior to using the application, a user must log in with a username and password which are stored in the database).

### Version

This version of the app has the backend written in PHP and a basic frontend which makes AJAX requests.

### Running

Using the PHP built in server, run the command "php -S localhost:8080" outside the project folder (the folder where the "urlcollection" folder is). The main page is located at "http://localhost:8080/urlcollection/main.php". 
The project needs a MySql database which can be created using the provided SQL scripts.
