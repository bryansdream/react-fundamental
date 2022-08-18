//Parent Component

import React, { useEffect, useState, useRef } from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.album";
import Posts from "./components/Posts/main.post"
import MainPage from "./components/MainPage/main.page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./index.css"


const App = () => {
  return (
      <MainLayouts>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Router>
      </MainLayouts>
  );
};

export default App;
