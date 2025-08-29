import { useEffect, useState } from "react";

const Themetoggle = () => {
  const [darkMode, setdarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setdarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      className={`p-4 flex items-center justify-center ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* <h2>{darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}</h2> */}
      <button
        onClick={() => setdarkMode(!darkMode)}
        className={`px-4 py-2 rounded-lg`}
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default Themetoggle;
