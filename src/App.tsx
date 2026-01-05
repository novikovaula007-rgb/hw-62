import {Route, Routes} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar.tsx";

const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container mt-5">
        <Routes>
          <Route path='/'/>
        </Routes>
      </main>
    </>
  )
}

export default App
