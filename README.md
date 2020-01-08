# Book Warehouse
Ralali Test 1

## Scenario

This application is used to manage products of a book warehouse.  User can do CRUD (Create, Read, Update, Delete) for the product on this app. 

## About Application

This app use Laravel for the backend and React.js for the frontend.  This application is connected by REST http protocol.

## How to Use

- Clone this project
- Inside backend folder:
  - Install composer dependencies
    `composer install`
  - Create copy of env file
    `cp .env.example .env`
  - Generate the app encryption key
    `php artisan key:generate`
  - Create database and remember to edit your `.env` file for the database name, username, and password
  - Migrate the database
    `php artisan migrate`
  - Seed the database
    `php artisan db:seed`
  - Run the application
    `php artisan serve`
- Inside front-end folder:
  - Install depedencies
    `npm install`
  - Run the application
    `npm start`