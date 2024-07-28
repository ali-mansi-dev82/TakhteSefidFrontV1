import { Routes, Route } from "react-router-dom";
import React from "react";

import Index from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import useResponsive from "./hooks/useResponsive";

const App = () => {
  const [isMobile] = useResponsive();

  return (
    <Routes>
      <Route path="/" element={<Index isMobile={isMobile} />} />
      <Route path="/login" element={<Login isMobile={isMobile} />} />
      <Route path="/register" element={<Register isMobile={isMobile} />} />
    </Routes>
  );
};

export default App;
