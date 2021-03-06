import { SiTwitter, SiGithub, SiInstagram } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <>
            <footer className="absolute w-full -bottom-0">
                <div className="bg-green-500 dark:bg-green-600">
                    <div className="container max-w-7xl mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-50 text-sm text-center sm:text-left">
                            © {year} UnEncrypted —
                            <span className="text-gray-50 ml-1">
                                Featured on {" "}
                                <a href="https://tech-blogs.dev/" rel="noopener noreferrer" target="_blank">
                                    tech-blogs.dev
                                </a>
                            </span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a
                                aria-label="Twitter"
                                className="text-gray-50"
                                href="https://twitter.com/RedatoB"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiTwitter />
                            </a>
                            <a
                                aria-label="Github"
                                className="ml-4 text-gray-50"
                                href="https://github.com/Reda-BELHAJ"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiGithub />
                            </a>
                            <a
                                aria-label="Instagram"
                                className="ml-4 text-gray-50"
                                href="https://www.instagram.com/ss8yeo_cho/"
                                rel="noopener noreferrer"
                                target="_blank">
                                <SiInstagram />
                            </a>
                            <a
                                aria-label="Linkedin"
                                className="ml-4 text-gray-50"
                                href="https://www.linkedin.com/in/reda-belhaj/"
                                rel="noopener noreferrer"
                                target="_blank"
                                >
                                <FiLinkedin />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer