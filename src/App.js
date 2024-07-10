import { Routes, Route } from "react-router-dom";
import React from "react";

// import { useResponsive } from "./context/ResponsiveContext";
// import ShowCategory from "./modules/category/pages/show";
// import NewPost from "./modules/post/pages/create/index";
// import MySaved from "./modules/my_panel/pages/my_saved";
// import MyNotes from "./modules/my_panel/pages/my_notes";
// import Post from "./modules/post/pages/find_one/index";
// import MyRecent from "./modules/my_panel/pages/recent";
// import NotFound from "./modules/error/pages/not_found";
// import Posts from "./modules/post/pages/filter/index";
// import MyPost from "./modules/my_panel/pages/my_post";
// import EditPost from "./modules/post/pages/edit";
// import AuthGuard from "./middleware/AuthGuard";
// import MyPanel from "./modules/my_panel/pages";
// import TestMui from "./modules/test/index";
import Index from "./pages/index";

const App = () => {
  // const { isMobile } = useResponsive();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  );
};

export default App;
