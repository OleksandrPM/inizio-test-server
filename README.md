## 📘 Practical Task — Inizio Company

This project is a server‑side application built with **Express.js**, **EJS**, and the **official Google Custom Search API**.  
Its purpose is to perform Google searches on the backend and display the results in a simple, user‑friendly interface.

### 🔍 Core Features

- Performs Google searches using the **Google Search API**
- Renders results on the server using **EJS templates**
- Returns the **first 10 search results** by default  
  (the number of results can be easily adjusted in the code)
- Allows users to **download the search results as a `.txt` file**
- Clean, minimal UI powered by EJS views
- Fully server‑side — no client‑side API keys exposed

### 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **EJS** (templating engine)
- **Google Custom Search JSON API**
- **JavaScript / ES Modules**

### 📄 How It Works

1. User enters a search query in the UI
2. Server sends the query to the Google Search API
3. API returns structured search results
4. Express renders them using EJS
5. User can optionally download the results as a `.txt` file

---
