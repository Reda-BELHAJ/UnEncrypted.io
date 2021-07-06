import Link from 'next/link';
import { useState } from "react";
import useSound from 'use-sound';
import Click from '../public/sounds/click.mp3'

const Tag = ({tag, link}) => {
    const [playbackRate, setPlaybackRate] = useState(0.75);

    const [play] = useSound(Click, {
        playbackRate,
        volume: 0.5,
      });
  
    const handleClick = () => {
        setPlaybackRate(playbackRate + 0.1);
        play();
      };
    return (
        <>
            <Link href={link}>
                <a 
                    onMouseOver={handleClick}
                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-300 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-300 text-grey-300 rounded-full m-1">
                    {tag}
                </a>
            </Link>
        </>
    )
}

export default Tag