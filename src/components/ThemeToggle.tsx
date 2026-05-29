"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="切换主题"
    >
      {theme === "light" ? (
        <Moon size={18} className="text-gray-500" />
      ) : (
        <Sun size={18} className="text-gray-400" />
      )}
    </button>
  );
}
