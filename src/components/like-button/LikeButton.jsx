import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const handleCountLike = () => {
    if (!liked) {
      setCountLike(countLike + 1);
    } else {
      setCountLike(countLike - 1);
    }
    setLiked(!liked);
  };
  return (
    <>
      <div>
         <h2 className="text-xl font-semibold">Like Count: {countLike}</h2>
      </div>
      <button
        onClick={handleCountLike}
        className={`px-4 py-2 rounded-lg font-medium  shadow ${liked ? "bg-pink-500  text-white" : "bg-gray-200 text-gray-500"}`}
      >
        {liked ? "❤️ Liked" : "♡ Like"}
      </button>
    </>
  );
};

export default LikeButton;
