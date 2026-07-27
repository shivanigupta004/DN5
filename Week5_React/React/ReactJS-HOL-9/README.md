# ReactJS-HOL-9: Cricket App

This React app demonstrates ES6 features inside a simple cricket application.

## Features

- `ListOfPlayers` component uses an array of 11 players and renders the list with `map()`.
- Filters players with scores below `70` using an ES6 arrow function.
- `IndianPlayers` component uses destructuring to display odd/even team players.
- Merges two arrays (`T20players` and `RanjiTrophy` players) with ES6 spread syntax.
- Uses a simple flag toggle to show one component or the other on the home page.

## Project structure

- `src/App.jsx` — toggles between the two cricket components.
- `src/ListOfPlayers.jsx` — renders player scores and filtered results.
- `src/IndianPlayers.jsx` — demonstrates destructuring and array merging.
- `src/App.css` — styles the app layout and cards.
- `OUTPUT.png` — screenshot preserved from the running app.

## Run locally

```bash
cd week_5/React/ReactJS-HOL-9
npm install
npm run dev
```

Then open `http://127.0.0.1:5173/` in your browser.

## Build

```bash
npm run build
```

## Notes

- The flag button switches between the `ListOfPlayers` and `IndianPlayers` views.
- This app is designed for learning ES6 `map`, `filter`, destructuring, and spread merge features.
