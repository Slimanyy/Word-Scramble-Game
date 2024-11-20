# Word Scramble Game

## Overview

The Word Scramble Game challenges players to guess a scrambled word within a time limit. Players are given a randomly shuffled word and must guess the original word. Correct guesses award points, and the game moves to the next word. If the player’s guess is wrong or the timer runs out, the word is refreshed with the next one. The game includes additional features like hints, a timer, and a scoring system to keep the gameplay engaging and challenging.

## Features
- **Scrambled Words**: Random words are scrambled for players to guess.
- **Timer**: A 1-minute countdown timer challenges players to guess quickly.
- **Hints**: Players can view a hint for each word.
- **Score System**: Tracks and displays the player's score.
- **Input Validation**: Only accepts non-empty strings for guesses.
- **Game Flow**: Automatically moves to the next word after a correct guess or timeout.

## Technologies Used
- **React.js**: For building the user interface.
- **JavaScript**: To implement the game logic and components.
- **CSS**: For styling the game and enhancing the user experience.

## Getting Started
1. Clone the repository to your local machine.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and visit `http://localhost:3000` to play the game!

## How to Play
- Enter your guess in the input field and click "Submit."
- If you guess correctly, you earn a point, and the next scrambled word appears.
- If you need help, click "Show Hint" to get a clue about the word.
- You have 1 minute per word, so make your guesses quickly!

## Optional Features
- Hint system to provide clues about the word.
- Scoring to keep track of the player’s progress.
- Timer for added challenge.

