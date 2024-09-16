import { Route, Routes } from "react-router-dom"
import SignInSide from "./pages/SignIn/SignInSide"
import Home from "./pages/Home/Home"


function App() {
  return (
    <>
     <Routes>
       <Route path="/login" element={<SignInSide/>} />
       <Route path="/home" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App

