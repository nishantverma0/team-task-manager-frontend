import useTheme from "../hooks/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all">
      
      {/* LEFT: Title */}
      <div>
        <h1 className="text-xl font-semibold tracking-tight">
          ⚡ TaskFlow
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your team efficiently
        </p>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-3">

        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
          ✨ AI Assist
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
        >
          {theme === "dark" ? "🌞" : "🌙"}
        </button>

      </div>
    </div>
  );
}
