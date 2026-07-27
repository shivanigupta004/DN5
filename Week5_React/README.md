# Week 5 — React Hands-On Labs

This folder contains React hands-on labs covering fundamentals through conditional rendering and lists.

All projects use **React 19** with **Vite** (except HOL-4 which uses Create React App).

---

## Labs Overview

| Lab | App Name | Topic |
|-----|----------|-------|
| [ReactJS-HOL-1](#reactjs-hol-1) | — | React + Vite setup, fundamentals |
| [ReactJS-HOL-2](#reactjs-hol-2) | studentapp | Components & props |
| [ReactJS-HOL-3](#reactjs-hol-3) | scorecalculatorapp | State & events |
| [ReactJS-HOL-4](#reactjs-hol-4) | blogapp | Component composition (CRA) |
| [ReactJS-HOL-5](#reactjs-hol-5) | cohortdashboard | Lists & data rendering |
| [ReactJS-HOL-9](#reactjs-hol-9) | Cricket App | ES6 features — map, filter, destructuring, spread |
| [ReactJS-HOL-10](#reactjs-hol-10) | — | React hooks |
| [ReactJS-HOL-11](#reactjs-hol-11) | — | Event handling |
| [ReactJS-HOL-12](#reactjs-hol-12) | ticketbookingapp | Conditional rendering |
| [ReactJS-HOL-13](#reactjs-hol-13) | bloggerapp | Conditional rendering (multiple ways) + Lists + Keys |

---

## ReactJS-HOL-1

React + Vite project template setup. Covers HMR, Oxlint, and the basics of a React application scaffold.

```bash
cd React/ReactJS-HOL-1
npm install
npm run dev
```

---

## ReactJS-HOL-2

**App:** `studentapp`

Covers React components and props. Renders student data passed as props into reusable components.

```bash
cd React/ReactJS-HOL-2/studentapp
npm install
npm run dev
```

---

## ReactJS-HOL-3

**App:** `scorecalculatorapp`

Covers React state and event handling. A score calculator that updates state on user interaction.

```bash
cd React/ReactJS-HOL-3/scorecalculatorapp
npm install
npm run dev
```

---

## ReactJS-HOL-4

**App:** `blogapp`

Covers component composition. Built with Create React App (`react-scripts`).

```bash
cd React/ReactJS-HOL-4/blogapp
npm install
npm start
```

---

## ReactJS-HOL-5

**App:** `cohortdashboard`

Covers rendering lists of data. A cohort dashboard that displays student/group information.

```bash
cd React/ReactJS-HOL-5/cohortdashboard
npm install
npm run dev
```

---

## ReactJS-HOL-9

**App:** Cricket App

Covers ES6 features inside React:
- `map()` to render player lists
- `filter()` with arrow functions
- Array destructuring
- Spread operator to merge arrays
- Toggle between two components

```bash
cd React/ReactJS-HOL-9
npm install
npm run dev
```

---

## ReactJS-HOL-10

React hooks lab. Covers `useState`, `useEffect`, and related hook patterns.

```bash
cd React/ReactJS-HOL-10
npm install
npm run dev
```

---

## ReactJS-HOL-11

Event handling lab. Covers increment/decrement counters, passing arguments to handlers, synthetic `onPress` behavior, and a currency converter component.

```bash
cd React/ReactJS-HOL-11
npm install
npm run dev
```

---

## ReactJS-HOL-12

**App:** `ticketbookingapp`

Covers conditional rendering:
- **Ternary operator** — Login/Logout button, header text, per-row Booked state
- **`&&` operator** — booking success message
- **Component swap** — `GuestPage` (browse only) vs `UserPage` (book tickets) based on login state

```bash
cd React/ReactJS-HOL-12
npm install
npm run dev
```

---

## ReactJS-HOL-13

**App:** `bloggerapp`

Covers conditional rendering (multiple techniques) + lists + keys:

| Technique | Where Used |
|-----------|-----------|
| `if` / early return (`return null`) | All three detail components |
| `&&` operator | BookDetails availability badge |
| Ternary `? :` | CourseDetails enrollment & level color |
| Element variable | BlogDetails `StatusBadge`, App `ActiveTabContent` |
| `switch` statement | App tab switcher |
| `map()` with `key` | All lists and tab buttons |

Three components: **BookDetails**, **BlogDetails**, **CourseDetails**.

```bash
cd React/ReactJS-HOL-13
npm install
npm run dev
```

---

## Notes

- All Vite projects run on `http://localhost:5173` by default (increments if port is taken).
- HOL-4 (`blogapp`) uses `npm start` instead of `npm run dev` (Create React App).
- Ensure **Node.js** and **NPM** are installed before running any project.
