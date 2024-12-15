import Homepage from "./homepage/Homepage"
import Login from "./login/Login"
import Register from "./register/Register"
import { BrowserRouter, Routes, Route } from "react-router";
export const ThemeContext = createContext('light')
import {useStore} from "zustand"
import { themeStore } from "./common/Store";
import NotFound from "./common/NotFound";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [theme,setTheme] = useState('light')
  const [accessToken] = useStore(themeStore)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Not Found />} />
      </Routes>
    </BrowserRouter>
  </ThemeContext.Provider>
  )
}

export default App