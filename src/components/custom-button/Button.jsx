import React from "react";

const Button = ({ title }) => {
  return (
    <div>
      <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700">
        {title}
      </button>
    </div>
  );
};

export default Button;
