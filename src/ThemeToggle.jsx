import { useGlobalContext } from "./context"
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'
const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext()
    
  return (
<section>
  <button  onClick={toggleDarkTheme}>
    {isDarkTheme?(
    <BsFillMoonFill/>

    ): (
      <BsFillSunFill/>

    )}

  </button>
</section>
  )
}
export default ThemeToggle