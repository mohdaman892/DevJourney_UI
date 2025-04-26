import "./App.css";
import { Navbar } from "../navbar/Navbar";
import { Login } from "../login/Login";
import { SignUp } from "../signup/Signup";
import { useState } from "react";

function App() {
  const [isLoginLoaded, setLoginLoaded] = useState(false);
  const [isSignupLoaded, setSignupLoaded] = useState(false);
  return (
    <div className="app">
      <Navbar
        setLoginLoaded={setLoginLoaded}
        setSignupLoaded={setSignupLoaded}
      />
      {isLoginLoaded ? (
        <Login setLoginLoaded={setLoginLoaded} isLoginLoaded={isLoginLoaded} />
      ) : (
        <></>
      )}
      {isSignupLoaded ? (
        <SignUp
          setSignupLoaded={setSignupLoaded}
          isSignupLoaded={isSignupLoaded}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export { App };
