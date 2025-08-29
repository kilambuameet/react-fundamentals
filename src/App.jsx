import React from "react";
import Counter from "./components/counter/Counter";
import Navbar from "./components/navbar/Navbar";
import LikeButton from "./components/like-button/LikeButton";
import Themetoggle from "./components/theme-toggle/Themetoggle";
import ProfileCard from "./components/profile-card/ProfileCard";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 ">
        <Counter />
        <LikeButton />
        <Themetoggle />
        <ProfileCard />
      </div>
    </>
  );
};

export default App;
