import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`px-4 py-2 rounded-lg font-medium  shadow ${liked ? "bg-pink-500  text-white" : "bg-gray-200 text-gray-500"}`}
    >
      {liked ? "❤️ Liked" : "♡ Like"}
    </button>
  );
};

export default LikeButton;
