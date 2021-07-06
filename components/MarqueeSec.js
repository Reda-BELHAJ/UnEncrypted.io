import Marquee from 'react-marquee-slider';
import {interests} from '../Data/informationAboutMe'
import { RiHeartFill } from "react-icons/ri";

const MarqueeSec = () => {
    const speed = 7;

    return (
        <section >
            <div className="flex justify-between items-center">
                <div className="w-2/5 border-t border-green-300 dark:border-green-500 mb-1" />
                <RiHeartFill size={56} className="text-green-300 dark:text-green-500"/>
                <div className="w-2/5 border-t border-green-300 dark:border-green-500 mb-1" />
            </div>

            <Marquee velocity={speed}>
                {interests.map((item, id) => (
                    <p
                        key={id}
                        className="text-2xl lg:text-3xl font-extrabold text-green-300 dark:text-green-500 ml-16"
                    >
                        {item}
                    </p>
                ))}
            </Marquee>
            <div className="w-full border-t border-green-300 dark:border-green-500 mb-1 mt-7" />
        </section>
    );
};

export default MarqueeSec;