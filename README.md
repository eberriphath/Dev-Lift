# Devlift

## Overview

Devlift is a single-page motivational web application designed for developers who feel tired or discouraged. It displays random motivational quotes from a local JSON file served by `json-server`, and includes features to like, copy, and refresh quotes easily.

## Features

- Displays motivational quotes stored in a local JSON file served by json-server
- Shows a random quote on page load
- **Get New Quote** button to display another random quote
- **Like** button to mark quotes you enjoy
- **Copy Quote** button to copy quotes to your clipboard for sharing or saving
- **Keyboard shortcut:** Press **"n"** to load a new quote

## Tech Stack

- HTML
- CSS
- JavaScript
- JSON Server (for serving local quotes data)

## Project Status

Phase 1: Complete

## Event Listeners Implemented

- **DOMContentLoaded:** Fetch and display quotes when the page loads
- **Click:**  
  - Get new quote  
  - Like quote  
  - Copy quote
- **Keydown:** Press 'n' to get a new quote

## Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository:**

   git clone https://github.com/eberriphath/Dev-Lift.git

2. **Navigate into the project folder:**

cd Dev-Lift
Install json-server globally if not already installed:

npm install -g json-server
Start the JSON server:

json-server --watch db.json
This will run your backend on http://localhost:3000/quotes.

Open index.html in your browser, or use VS Code Live Server extension for consistent local hosting.

In VS Code, right-click index.html and select "Open with Live Server".

Interact with the app:

Click "Get New Quote" for a new motivational quote

Click "❤️ Like" to like a quote

Click "📋 Copy Quote" to copy it to your clipboard

Press "n" on your keyboard to fetch a new quote

Note: Quotes data is served via json-server and will not load on GitHub Pages. To test fully, run json-server locally as described above.

Live Site
Devlift on GitHub Pages

Author
Eber Riphath
Email: riphatheber@gmail.com

© 2025 Devlift. All rights reserved.