import { useTheme } from "../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition"
    >
      {darkMode ? (
        <FaSun className="text-yellow-400 text-lg" />
      ) : (
        <FaMoon className="text-gray-800 text-lg" />
      )}
    </button>
  );
}