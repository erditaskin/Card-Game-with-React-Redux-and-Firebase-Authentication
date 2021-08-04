## Ultimate Card Game

This app is made for fulfilling requirements of given advanced react assesment task.

Project features

1. It's based on firebase authentication.
2. It uses redux and redux thunk to manage state.
3. Game and auth states are persisted with redux-persist in localstorage.
4. Project is configured to run up on docker aswell
5. What project offers is a simple card drawing game from a single deck, whoever gets higher card gets 1 point. In the end of deck whoever collects more points wins whole game.

## Firebase Conf

To configure firebase;

1. Proceed on firebase console of your project. If you haven't created a project, create one and then proceed to console. (https://console.firebase.google.com/project/APP_NICKNAME)
2. Collect your configration data from "SDK setup and configuration" section of console.
3. Put your confirgration data to .env or .env_local file

## Deck of Cards API

https://deckofcardsapi.com/ is offering free API service of fetching decks and cards information.
Project is based on this API service.

## Running

- Clone the app
- `cd project_folder`
- `docker-compose up`
- It will run up @http://localhost:3000
