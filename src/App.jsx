import { useState } from "react";
import "./App.css";
import Login from "./components/authentication/Login";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  const hello = "hello";

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
