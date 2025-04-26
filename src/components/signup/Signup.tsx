import { useEffect, useRef } from "react";
import "../login/Login.css";

function SignUp({
  setSignupLoaded,
  isSignupLoaded,
}: {
  setSignupLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  isSignupLoaded: boolean;
}) {
  const divRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const elem = document.getElementsByClassName("navbar")[0] as HTMLElement;
    if (elem) elem.style.filter = "blur(2px)";

    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setSignupLoaded(false);
        if (elem) elem.style.filter = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (elem) elem.style.filter = "none";
    };
  }, []);

  if (!isSignupLoaded) return null;

  function comparePasswords() {
    const passElem1 = document.getElementById("pass1") as HTMLInputElement;
    const passElem2 = document.getElementById("pass2") as HTMLInputElement;
    if (!passElem1 || !passElem2) {
      throw "Element does not exist";
    }
    if (passElem1.value != passElem2.value) {
      const messageElement = document.getElementsByClassName(
        "info-message"
      )[0] as HTMLElement;
      messageElement.innerText = "Passwords do not match";
    } else {
      const messageElement = document.getElementsByClassName(
        "info-message"
      )[0] as HTMLElement;
      messageElement.innerText = "";
    }
  }

  return (
    <div className="login-form">
      <form className="form" ref={divRef}>
        <div className="login-form-heading">
          <h1>Sign Up!</h1>
        </div>
        <div>
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" placeholder="Password" id="pass1" required />
        </div>
        <div>
          <input
            type="password"
            placeholder="Retype Password"
            id="pass2"
            required
            onChange={() => comparePasswords()}
          />
          <text className="info-message"></text>
        </div>
        <div className="login-button-div">
          <button className="form-login-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export { SignUp };
