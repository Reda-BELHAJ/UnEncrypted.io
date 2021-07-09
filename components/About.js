import { SiTwitter, SiGithub } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { GrMail } from "react-icons/gr";
import MarqueeSec from "./MarqueeSec";
import {information} from '../Data/informationAboutMe'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div className="pt-20 px-10 mx-auto max-w-7xl">
                <div>
                    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            About Me
                        </h1>
                    </div>
                    <div className="border-t border-green-300 dark:border-green-500">
                        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                            <div className="flex flex-col items-center pt-8 space-x-2">
                                <Image
                                    src="https://avatars.githubusercontent.com/u/58605073?v=4"
                                    alt="avatar"
                                    width={192}
                                    height={192}
                                    className="w-48 h-48 rounded-full"
                                />
                                <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-50">
                                    {information.name}
                                </h3>
                                <div className="text-gray-900 dark:text-gray-50">Computer Science Student</div>
                                <div className="text-gray-900 dark:text-gray-50">International University of Rabat</div>
                                <span className="flex pt-6 space-x-3 text-gray-900 dark:text-gray-50">
                                    <a
                                        className="ml-4"
                                        href="mailto:reda.belhaajj@gmail.com"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            <GrMail />
                                    </a>
                                    <a
                                        className="ml-4"
                                        href="https://github.com/Reda-BELHAJ"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            <SiGithub />
                                    </a>
                                    <a
                                        className="ml-4"
                                        href="https://www.linkedin.com/in/reda-belhaj/"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            <FiLinkedin />
                                    </a>
                                    <a
                                        className="ml-4"
                                        href="https://twitter.com/RedatoB"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        >
                                            <SiTwitter />
                                    </a>
                                </span>
                            </div>
                            <div className="pt-8 pb-8 text-gray-900 dark:text-gray-50 max-w-none xl:col-span-2 text-justify">
                                {information.summary.map((item, id) => (
                                    <div key={id}>
                                        <p>
                                            {item}
                                        </p><br/>
                                    </div>
                                ))}
                                <MarqueeSec />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About