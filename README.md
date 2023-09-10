# Flashcard App

## Overview

Welcome to the Flashcard Application, a web-based study tool that empowers users to create, edit, and delete decks of study cards. Whether you're a student preparing for exams or a lifelong learner, this application makes it easy to organize your study materials.

## Technologies & Tools

The Flashcard Application is built using the following technologies and tools:
- JavaScript
- React.js
- Express.js
- Knex.js
- HTML
- CSS
- Git (for progress and version tracking)

## API Paths

The Flashcard Application provides the following API endpoints:
- `GET /decks`: Retrieves a list of all study decks.
- `POST /decks`: Creates a new study deck.
- `GET /decks/:deckId`: Retrieves details of a specific study deck by its ID.
- `PUT /decks/:deckId`: Updates details of a specific study deck by its ID.
- `GET /decks/:deckId/cards`: Retrieves all cards belonging to a specific study deck.
- `POST /decks/:deckId/cards`: Creates a new study card within a specific deck.
- `GET /decks/:deckId/cards/:cardId`: Retrieves details of a specific study card by its ID.
- `PUT /decks/:deckId/cards/:cardId`: Updates details of a specific study card by its ID.
- `DELETE /decks/:deckId/cards/:cardId`: Deletes a specific study card by its ID.

## Run Locally

To run the Flashcard Application locally, follow these steps:
1. Clone the repository: `git clone https://github.com/macadamsch/Glashcard-Study-App.git`
2. Navigate to the project directory: `cd study-tool-app`
3. Install dependencies: `npm install` or `yarn install` if you're using Yarn.
4. Start the development server: `npm start` or `yarn start`.
5. Open your web browser and access the application at `http://localhost:3000`.
