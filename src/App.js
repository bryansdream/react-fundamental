//Parent Component

import React, { useEffect, useState, useRef } from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.album";
import Posts from "./components/Posts/main.post"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <MainLayouts>
          <Router>
            <Routes>
              <Route path="/" element={<h1>WWW</h1>} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Router>
      </MainLayouts>
    </>
  );
};

export default App;
