import { useState } from "react";
import Home from "./page/home/Home";
import Profile from "./components/profile/Profile";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
// import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return(
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
