"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center order-last ">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-300 rounded-full outline-none focus:outline-none "
        ></button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20"
        ></button>
      )}
    </div>
  );
};

export default ThemeChanger;
