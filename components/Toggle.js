import { BiSun, BiMoon } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import useSound from 'use-sound';
import Click from '../public/sounds/click.mp3'

const Toggle = () => {
    const [isMounted, setIsMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [playbackRate, setPlaybackRate] = useState(0.75);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const toggleTheme = () => {
        if (isMounted) {
        setTheme(theme === "light" ? "dark" : "light");
        }
    };

    const [play] = useSound(Click, {
      playbackRate,
      volume: 0.5,
    });

    const handleClick = () => {
      setPlaybackRate(playbackRate + 0.1);
      play();
    };

    return (
        <button
              className="flex items-center mx-2 text-base dark:hover:text-green-500 text-gray-800 hover:text-green-500 dark:text-gray-50"
              onClick={() => {
                toggleTheme()
                handleClick()
                }
              }
            >
              <span className="text-lg">
                {isMounted && theme === "dark" ? <BiMoon /> : <BiSun />}
              </span>
        </button>
    )
}

export default Toggle