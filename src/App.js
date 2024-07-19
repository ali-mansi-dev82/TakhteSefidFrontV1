import { Routes, Route } from "react-router-dom";
import React from "react";

import Index from "./pages/home/index";
import useResponsive from "./hooks/useResponsive";

const App = () => {
  const [isMobile] = useResponsive();

  return (
    <Routes>
      <Route path="/" element={<Index isMobile={isMobile} />} />
    </Routes>
  );
};

export default App;
