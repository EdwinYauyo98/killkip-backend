import { useState } from "react";
import "./App.css";

import LogIn from "./pages/LogIn/LogIn";
import SignIn from "./pages/SignIn/SignIn";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const changeForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div className="App">
      {showLogin ? (
        <LogIn changeForm={changeForm} />
      ) : (
        <SignIn changeForm={changeForm} />
      )}
    </div>
  );
}

export default App;
