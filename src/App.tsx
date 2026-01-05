import {Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.tsx";
import Home from "./containers/Home/Home.tsx";
import AboutUs from "./containers/AboutUs/AboutUs.tsx";

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container mt-5">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App
