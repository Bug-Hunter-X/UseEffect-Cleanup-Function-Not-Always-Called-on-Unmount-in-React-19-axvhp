# React 19 useEffect Cleanup Issue

This repository demonstrates a potential issue where the cleanup function within React's `useEffect` hook might not reliably execute during component unmounting, specifically under certain edge-case scenarios such as rapid state updates or concurrent rendering conflicts.

## Problem Description

The provided `bug.js` file contains a simple component using `useEffect`. The cleanup function should log 'Component unmounted' when the component unmounts. However, in certain situations (e.g., rapidly switching between routes or complex state changes), this log might be missing.  This unexpected behavior can lead to resource leaks or other unintended consequences.

## Solution

The `bugSolution.js` file illustrates a potential workaround (or points to improved practices to avoid this) to mitigate this issue, though a complete solution may depend on your app's specifics.  This might include using techniques like `useRef` for more controlled cleanup operations or careful management of asynchronous tasks to prevent races.

## Setup

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the React development server.  Observe the console logs during unmount to see the issue, if it reproduces.