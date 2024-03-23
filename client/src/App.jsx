import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <h2>Full Stack App For Jokes</h2>
      <p className="jokes">JOKES:{jokes.length}</p>

      {jokes.map((joke) => (
        <div className="card" key={joke.id}>
          <p>{joke.title}</p>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
