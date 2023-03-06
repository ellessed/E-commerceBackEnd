# E-commerceBackEnd

## Description

The purpose of this project was to create the back end for an e-commerce site using a working Express.Js API and to configure it to use Sequelie to interact with a MySQL database.

## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Instillation

To use this application node.js must be installed: https://nodejs.org/en/download/

The packages required are:

dotenv @8.2.0
express @4.17.1
mysql2 @2.1.0
sequelize @5.21.7
All dependencies should already be in the package.json file and installed through running npm i in the terminal.

## Usage

The data base shall be created by running the following command in the terminal mysql mysql -u root -p and source db/schema.sql
Then run the quit command
run npm run seed
Finally hit npm run start
GET, POST, PUT and DELETE requests can be made in postman or insomnia

## Link

https://drive.google.com/file/d/18VYqxYiKRT9aCx5pGKgso1YfSBkvkEbu/view

## License

NA
