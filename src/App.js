//Parent Component

import React, { useEffect, useState, useRef } from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.album";
import Posts from "./components/Posts/main.post"
import MainPage from "./components/MainPage/main.page";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css"
import Navigation from "./components/Layouts/navigation.layouts";


const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <div className="box-border px-3 min-h-screen w-full bg-slate-100">
        <Routes basename="/">
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
