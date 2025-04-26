import "./Navbar.css";

function Navbar({
  setLoginLoaded,
  setSignupLoaded,
}: {
  setLoginLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  setSignupLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navitems = ["About", "FAQ", "Contact"];
  const dropdowns = [
    {
      key: "About",
      values: ["Fourth", "Fifith"],
    },
    { key: "About", values: ["First", "Second", "Third"] },
    { key: "Contact", values: ["First", "Second", "Third"] },
  ];
  const dropdownItems = [""];
  const Navitem = ({ title }: { title: string }) => (
    <button
      className="nav-items"
      onMouseEnter={() => showDropdown(title)}
      onClick={() => showDropdown(title)}
    >
      <div className="nav-items-name">{title}</div>
    </button>
  );
  const Dropdown = ({
    dropdownData,
  }: {
    dropdownData: { key: string; values: string[] };
  }) => (
    <div className="nav-items-dropdown" id={dropdownData.key}>
      {dropdownData.values.map((item: string) => (
        <button>{item}</button>
      ))}
    </div>
  );

  function showDropdown(title: string) {
    if (dropdownItems.includes(title)) {
      const dropdownElement = document.getElementById(title);
      if (dropdownElement) dropdownElement.style.visibility = "visible";
    }
    for (var x in dropdownItems) {
      if (dropdownItems[x] != title) {
        hideDropdown(dropdownItems[x]);
      }
    }
  }

  function hideDropdown(title: string) {
    const dropdownElement = document.getElementById(title);
    if (dropdownElement) dropdownElement.style.visibility = "hidden";
  }

  return (
    <div className="navbar">
      <div className="div1">
        <div className="div11">
          <img src="logo.png" className="logo"></img>
        </div>
      </div>
      <div className="div2" onMouseLeave={() => showDropdown("Null")}>
        <div className="div21">
          {navitems.map((item: string) => (
            <Navitem title={item} />
          ))}
        </div>
        <div className="div22">
          {dropdowns.map((item) => (
            <Dropdown dropdownData={item} />
          ))}
        </div>
      </div>
      <div className="div3">
        <div className="div31">
          <button
            className="login-button"
            onClick={() => {
              setLoginLoaded(true), setSignupLoaded(false);
            }}
          >
            Login
          </button>
          <button
            className="get-started-button"
            onClick={() => {
              setLoginLoaded(false), setSignupLoaded(true);
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
