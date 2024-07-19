import React from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";

const index = ({ isMobile }) => {
  return isMobile ? <Mobile /> : <Desktop />;
};

export default index;
