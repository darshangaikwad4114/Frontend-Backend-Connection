# 🎭 Dad Jokes Full-Stack Application

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 🔄 Axios for API requests
- 🎨 CSS for styling (responsive design)
- 🪝 React Hooks (useState, useEffect)

### Backend
- 🟢 Node.js
- 🚂 Express.js
- 📜 JavaScript (ES Modules)

## 📝 Description

This full-stack application serves as a platform for displaying a collection of dad jokes. The project consists of a React frontend that communicates with an Express backend API to fetch and display jokes. It features a responsive design that works across different device sizes and includes a light/dark mode toggle for user preference.

## ✨ Key Features

- **🔌 RESTful API**: Backend Express server providing endpoints to fetch all jokes, a random joke, or a specific joke by ID
- **📱 Responsive Design**: Mobile-first approach with a fluid layout that adapts to different screen sizes
- **🌓 Dark Mode Support**: Toggle between light and dark themes with persistent user preference
- **♿ Accessibility**: Support for keyboard navigation, screen readers, and follows accessibility best practices
- **🛡️ Error Handling**: Graceful error handling on both frontend and backend with user-friendly messages

## 🚀 Installation

### Prerequisites
- 🟢 Node.js (v14 or newer)
- 📦 npm (v6 or newer)

### Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Full-stack-app
   ```

2. Set up the backend:
   ```
   cd backend
   cp .env.example .env
   npm install
   ```

3. Set up the frontend:
   ```
   cd ../client
   npm install
   ```

## 📋 Usage

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
   The server will run on http://localhost:5000

2. In a new terminal, start the frontend development server:
   ```
   cd client
   npm run dev
   ```
   The client will run on http://localhost:5173

3. Open your browser and navigate to http://localhost:5173 to see the application

### API Endpoints

- `GET /api/jokes`: Fetch all jokes
- `GET /api/jokes/random`: Fetch a random joke
- `GET /api/jokes/:id`: Fetch a specific joke by ID

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch:
   ```
   git checkout -b feature/your-feature-name
   ```
3. Make your changes
4. Commit your changes:
   ```
   git commit -m 'Add some feature'
   ```
5. Push to the branch:
   ```
   git push origin feature/your-feature-name
   ```
6. Open a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
