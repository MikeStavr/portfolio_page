import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ToggleTheme() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <label className="swap swap-rotate mr-2 ml-2 hover:text-primary">
        <input onClick={toggleTheme} type="checkbox" />
        <div className="swap-on">
          <FaMoon size={20} />
        </div>
        <div className="swap-off">
          <FaSun size={20} />
        </div>
      </label>
    </>
  );
}
