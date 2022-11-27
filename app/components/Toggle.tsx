import { Theme, useTheme } from "utils/theme-provider";
import { BsFillMoonFill, BsSun } from "react-icons/bs";

export default function Toggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((theme) => (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <button onClick={toggleTheme}>
      {theme == Theme.LIGHT ? (
        <p className="text-gray-600 flex items-center space-x-2">
          <span> DARK</span> <BsFillMoonFill className="text-stone-600" />
        </p>
      ) : (
        <p className="text-gray-200 flex items-center space-x-2">
          <span> LIGHT </span>
          <BsSun className="text-amber-500" />
        </p>
      )}
    </button>
  );
}
