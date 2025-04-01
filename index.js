// Przykładowa struktura projektu
// Folder: /src

// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// src/App.js
import React from "react";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      <h1>Aplikacja PDF</h1>
      <Dashboard />
    </div>
  );
}

export default App;

// src/components/Dashboard.js
import React from "react";

function Dashboard() {
  return (
    <div>
      <h2>Panel główny</h2>
      <p>Tu pojawią się dokumenty PDF i ich edycja.</p>
    </div>
  );
}

export default Dashboard;

// src/styles.css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  text-align: center;
}
