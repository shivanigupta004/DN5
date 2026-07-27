# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## ScoreCalculatorApp (Score Calculator)

This project was adapted for a hands-on lab. It contains a `CalculateScore` component in `src/Components` which accepts Name, School, Total and Goal (number of subjects) and computes the average score.

Run locally:

```
cd week_5/React/ReactJS-HOL-3/scorecalculatorapp
npm install
npm run dev
```

Open the dev URL shown in the terminal (typically http://localhost:5173).
