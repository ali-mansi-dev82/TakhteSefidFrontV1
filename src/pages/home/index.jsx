import React from "react";

const index = ({ isMobile }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl  text-blue-500">
        {isMobile ? "mobile" : "desktop"}
      </h1>
    </div>
  );
};

export default index;
