import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "./components/Recipes";
import Home from "./pages/Home";
import UeberUns from "./pages/UeberUns";
import Nav from "./components/nav/Nav";
import "./App.css"

const App = () => {
  return ( 
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ueberuns" element={<UeberUns/>}/>
      <Route path="/recipes" element={<Recipes/>}/>
    </Routes>
    </BrowserRouter>
    </>
)}
 
export default App;