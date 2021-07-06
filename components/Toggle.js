import { BiSun, BiMoon } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Toggle = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
        }
    };

    return (
        <button
              className="flex items-center mx-2 text-base text-gray-800 hover:text-indigo-600 dark:text-gray-50"
              onClick={toggleTheme}
            >
              <span className="text-lg">
                {isMounted && theme === "dark" ? <BiMoon /> : <BiSun />}
              </span>
        </button>
    )
}

export default Toggle