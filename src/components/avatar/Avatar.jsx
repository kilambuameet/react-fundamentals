import React from "react";
import alex from "../../assets/alex.png";

const Avatar = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200">
      <img src={alex} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
