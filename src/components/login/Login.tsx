import { useEffect, useRef } from "react";
import "./Login.css";

function Login({
  setLoginLoaded,
  isLoginLoaded,
}: {
  setLoginLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  isLoginLoaded: boolean;
}) {
  const divRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const elem = document.getElementsByClassName("navbar")[0] as HTMLElement;
    if (elem) elem.style.filter = "blur(2px)";

    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setLoginLoaded(false);
        if (elem) elem.style.filter = "none";
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (elem) elem.style.filter = "none";
    };
  }, []);

  if (!isLoginLoaded) return null;

  return (
    <div className="login-form">
      <form className="form" ref={divRef}>
        <div className="login-form-heading">
          <h1>Enter Login Details</h1>
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div className="login-button-div">
          <button className="form-login-button">Login</button>
        </div>
      </form>
    </div>
  );
}

export { Login };
