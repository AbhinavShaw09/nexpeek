import { Route, Routes } from "react-router-dom"
import ResponsiveAppBar from "./components/AppBar/AppBar"
import SignInSide from "./pages/SignIn/SignInSide"

function App() {
  return (
    <>
     <Routes>
       <Route path="/login" element={<SignInSide/>} />
       <Route path="/home" element={<ResponsiveAppBar/>} />
    </Routes>
    </>
  )
}

export default App

