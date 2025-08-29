import React from "react";
import Themetoggle from "../../components/theme-toggle/ThemeToggle";
import Counter from "../../components/counter/Counter";
import LikeButton from "../../components/like-button/LikeButton";
import ProfileCard from "../../components/profile-card/ProfileCard";
import alex from "../../assets/alex.png";

const ReactFundamentals = () => {
  const profileData = [
    {
      name: "Ameet Kilambu",
      role: "Frontend Developer",
      avatar: "https://via.placeholder.com/100",
      bio: "Learning React step by step.",
      buttonLabel: "Follow",
    },
    {
      name: "John Doe",
      role: "Backend Developer",
      avatar: "https://via.placeholder.com/100",
      bio: "Loves coding and coffee.",
      buttonLabel: "Connect",
    },
    {
      name: "Jane Smith",
      role: "UI/UX Designer",
      avatar: "https://via.placeholder.com/100",
      bio: "Designing intuitive interfaces.",
      buttonLabel: "Message",
    },
  ];
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

      <div className="grid grid-cols-3 space-x-5">
        {profileData.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default ReactFundamentals;
