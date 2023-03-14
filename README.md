# Social-Network-API

## Description

This application is the back-end API for a social network using mongoDB.
My motivation in building this project was to better understand NoSQL databases and to practice newly learned techniques.

## Table of Contents 

- [Installation](#installation)
- [Usage (Demo included)](#usage)
- [License](#license)
- [Tests](#tests)

## Installation
* clone this repository to your local computer.
* be sure you have node and mongoDB dowloaded.
* install depdendencies with command `npm i`. 

## Usage
* run `npm start` in your terminal
* to view the socialDB, connect to MongoDB with `mongodb://localhost:27017` (you will want to do this or you will get confused)
* use insomnia to create seeds and test API routes
* Demo included below:
https://drive.google.com/file/d/1EWcXdY4CBPQuh6ezPDOZ8cr-7L9o1L11/view?usp=sharing

## License

This application is covered by an MIT license

## Tests

Test routes using insomnia! The following includes the paths in which to test the routes.

* Get all users: `GET /api/users`
* Get a single user: `GET /api/users/:userId`
* Create new user: `POST /api/users`
* Update a user: `PUT /api/users/:userId`
* Delete a user: `DELETE /api/users/userId`

* Add a friend: `POST /api/users/:userid/friends/friendId`
* Delete a friend: `DELETE /api/users/:userid/friends/friendId`

* Get all thoughts: `GET /api/thoughts`
* Get single thought: `GET /api/thoughts/:thoughtId`
* Create a thought: `POST /api/thoughts`
* Update a thought: `PUT /api/thoughts/:thoughtId`
* Delete a thought: `DELETE /api/thoughts/:thoughtId`

* Create a reaction: `POST /api/thoughts/:thoughtId/reactions`
* Delete a reaction: `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

