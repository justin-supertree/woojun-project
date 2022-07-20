import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import MyInfo from "./pages/MyInfo";
import Story from "./pages/Story";
import Header from "./Layout/Header";

import "./App.css";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/myinfo" element={<MyInfo />} />
                <Route path="/story" element={<Story />} />
            </Routes>
        </>
    );
};

export default App;
