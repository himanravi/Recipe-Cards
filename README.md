# 🍳 Recipe-Cards

![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-Node.js--Express--EJS-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

A simple and elegant web application for managing and displaying your favorite recipes. Built with Node.js, Express, and EJS, users can add new recipes through a form and view them instantly in a beautiful gallery. This project uses an in-memory store, making it a perfect lightweight example for learning purposes.


---

## ✨ Features

-   **Dynamic Recipe Gallery**: View all submitted recipes in a responsive, modern card layout.
-   **Add New Recipes**: An intuitive form to easily add recipe details, including name, ingredients, and cooking time.
-   **Modern UI**: Styled with Bootstrap and custom CSS for a clean and polished user experience.
-   **In-Memory Storage**: Lightweight data handling where recipes are stored for the current session (data resets on server restart).

---

## 🛠️ Tech Stack

-   **Backend**: Node.js, Express.js
-   **Templating Engine**: EJS (Embedded JavaScript)
-   **Styling**: Bootstrap 5, Custom CSS with Google Fonts

---

## 📂 Project Structure

Here is a high-level overview of the project's directory structure.

recipe-cards/
├── app.js            # Main Express server and application logic
├── package.json      # Project dependencies and scripts
├── public/
│   └── css/
│       └── custom.css # Custom styles, fonts, and animations
└── views/
├── index.ejs      # Main view with the recipe form and gallery
└── partials/
├── footer.ejs # Page footer and JS script includes
└── header.ejs # Page header, navbar, and CSS links


---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### 1. Prerequisites

Make sure you have **Node.js** and **npm** installed on your system.

-   [Node.js](https://nodejs.org/) (v16.x or higher is recommended)
-   npm (comes bundled with Node.js)

### 2. Clone the Repository

First, clone the repository to your local machine.

```bash
git clone [https://github.com/your-username/recipe-cards.git](https://github.com/your-username/recipe-cards.git)
cd recipe-cards
3. Install Dependencies
Install the necessary project dependencies defined in package.json.

Bash

npm install
4. Run the Application
Start the development server using the provided npm script.

Bash

npm start
5. Open in Browser
The application will now be running. Open your browser and navigate to:

👉 http://localhost:3000

💡 Usage
The application is straightforward to use:

Launch the application to view the recipe gallery.

Fill out the "Add a New Recipe" form with details like the recipe name, ingredients, cooking time, and an image URL.

Click the "Add Recipe" button.

The page will refresh, and your new recipe card will instantly appear in the gallery.

⚠️ A Note on Data Persistence
This application uses a simple in-memory array to store the recipes. This means that any recipes you add will be lost when the server is stopped or restarted. This design is intentional to keep the project simple and focused on the fundamentals of Node.js and Express without requiring a database.

📝 License
This project is licensed under the MIT License. See the LICENSE file for more details.