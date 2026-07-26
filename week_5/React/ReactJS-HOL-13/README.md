# ReactJS-HOL-13 — Conditional Rendering & Lists

## Objectives

- Explain various ways of conditional rendering
- Explain how to render multiple components
- Define list component
- Explain about keys in React applications
- Explain how to extract components with keys
- Explain React Map / `map()` function

## What You Will Learn

- Implement conditional rendering in React applications using multiple techniques

## Prerequisites

- Node.js
- NPM
- Visual Studio Code

## Estimated Time

60 minutes

## Project: bloggerapp

A React application with 3 components:

1. **BookDetails** — lists books with availability (uses `&&` operator + early return)
2. **BlogDetails** — lists blog posts with status (uses element variables + early return)
3. **CourseDetails** — lists courses with level/enrollment (uses ternary operator + early return)

### Conditional Rendering Techniques Demonstrated

| Technique | Where Used |
|---|---|
| `if` / early return (`return null`) | All three detail components |
| `&&` operator | BookDetails availability badge |
| Ternary `? :` | CourseDetails enrollment, LevelTag color |
| Element variable | BlogDetails `StatusBadge`, App `ActiveTabContent` |
| `switch` statement | App `ActiveTabContent` |
| `map()` for lists with `key` | All lists + tab buttons |

## Run

```bash
cd week_5/React/ReactJS-HOL-13
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).
