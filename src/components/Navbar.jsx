<div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 backdrop-blur-md sticky top-0 z-40">

  {/* LEFT */}
  <div>
    <h1 className="text-xl font-semibold tracking-tight">
      ⚡ TaskFlow
    </h1>
    <p className="text-xs text-gray-500 dark:text-gray-400">
      Manage your team efficiently
    </p>
  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-3">

    {/* AI */}
    <button
      onClick={() => setOpenAI(true)}
      className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:scale-105 transition"
    >
      ✨ AI Assist
    </button>

    {/* Theme */}
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
