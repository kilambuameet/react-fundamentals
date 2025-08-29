import React from "react";
import Themetoggle from "../../components/theme-toggle/ThemeToggle";
import Counter from "../../components/counter/Counter";
import LikeButton from "../../components/like-button/LikeButton";

const ReactFundamentals = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10 p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">React Fundamentals – Day 2</h1>

      {/* Theme Toggle */}
      <div className="w-full max-w-sm">
        <Themetoggle />
      </div>

      {/* Counter */}
      <div className="w-full max-w-sm">
        <Counter />
      </div>

      {/* Like Button */}
      <div className="w-full max-w-sm">
        <LikeButton />
      </div>
    </div>
  );
};

export default ReactFundamentals;
