import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from './Util/ThemeContext';

const Toggle = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        theme === 'dark' ? 
        (
            <button className="flex items-center mx-2 text-base text-gray-900 hover:text-green-500 dark:text-gray-50"
                onClick={()=>setTheme(theme === 'dark' ? 'light':'dark')}>
                <span className="text-lg">
                    <BiMoon />
                </span>
            </button>
        ) : (
            <button className="flex items-center mx-2 text-base text-gray-900 hover:text-green-500 dark:text-gray-50"
                onClick={()=>setTheme(theme === 'dark' ? 'light':'dark')}>
                <span className="text-lg">
                    <BiSun />
                </span>
            </button>
        )
    )
}

export default Toggle