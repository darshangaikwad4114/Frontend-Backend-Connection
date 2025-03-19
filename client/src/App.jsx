import { useEffect, useState } from "react";
import axios from "axios";
import JokesList from "./components/JokesList";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch jokes. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="app-container">
      <Header jokesCount={jokes.length} />
      
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage message={error} />
      ) : (
        <JokesList jokes={jokes} />
      )}

      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
