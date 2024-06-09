# scroll-typer

---START_OF_SPECIFICATION---

## Project Description

This project is to create a single-page web application that contains a simple side-scrolling game. The target users for this game are casual gamers who enjoy fun, quick word-based challenges.

The main purpose of the game is to provide an entertaining experience where the player navigates a character around a scrolling world, encounters words, and must quickly type them correctly to earn points. The goal is to accumulate as many points as possible.

## Features

- Side-scrolling game world that the player can navigate using WASD keys
- Player-controlled character/sprite that moves around the game world 
- Random words appear in the game world for the player to interact with
- Player must correctly type each word they encounter as quickly as possible
- Points are awarded based on how fast the player successfully types each word
- A counter in the top-right corner of the screen tracks the player's total points
- Wide variety of words to keep the gameplay interesting
- Aesthetic, visually-appealing website design using the Tailwind CSS framework

## Functional Specification

When a user loads the web application, they will see the side-scrolling game world with their character placed in it. The user can move the character around using the WASD keys - W to move up, A to move left, S to move down, and D to move right.

As the character explores the game world, words will occasionally appear in random locations. When the character encounters a word by touching it, the word will be displayed prominently on the screen. The user must then type the word using their keyboard. 

A text input field will be provided for the user to type the word into. The game will track the time it takes for the user to successfully type the word. More points will be awarded for faster typing, incentivizing the player to type quickly and accurately.

If the player types the word correctly, the word will disappear and points will be added to their total score, which is displayed in the top-right corner of the screen at all times. The player can then continue exploring the game world to find more words.

The words that appear will be randomly selected from a large pool of words of varying length and complexity. This will keep the gameplay fresh and challenging.

## Technical Specification

The web application will be built as a single HTML file, with all necessary CSS and JavaScript included inline. No external files or libraries will be used, apart from the Tailwind CSS framework.

The game world and character will be rendered using HTML5 canvas. JavaScript will be used to control the game logic, handle user input, manage word encounters and typing challenges, and update the score counter.

The Tailwind CSS framework will be used to style the application and make it visually appealing. The utility-first nature of Tailwind will allow for rapid, efficient styling without the need for custom CSS.

Words to be used in the game will be stored in a JavaScript array directly in the code. When a word encounter is triggered, a random word will be selected from this array and presented to the user to type.

The user's score and game state (e.g. character position, encountered words, etc.) will be managed in JavaScript variables. No persistent data storage is required, as the game is intended for short-term casual play sessions.

The application will be designed to be responsive and work well on both desktop and mobile devices. However, the primary input method will be keyboard, so desktop usage will likely be preferred for optimal experience.

---END_OF_SPECIFICATION---

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Tailwind CSS.

- Vite
- React
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/scroll-typer.git
cd scroll-typer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
