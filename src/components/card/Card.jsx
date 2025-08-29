import React from "react";

const Card = ({ children }) => {
  return (
    <div className="max-w-sm bg-gray-100 rounded-lg shadow-2xl p-6 flex flex-col items-center space-y-5">
      {children}
    </div>
  );
};

export default Card;
