import React from "react";
import Mobile from "./mobile/index";
import Desktop from "./desktop";

const Index = ({ isMobile }) => {
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Index;
