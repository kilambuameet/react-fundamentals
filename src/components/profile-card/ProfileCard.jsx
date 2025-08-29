import React from "react";
import Avatar from "../avatar/Avatar";
import Button from "../custom-button/Button";
import Card from "../card/Card";

const ProfileCard = () => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center space-y-4">
        <Avatar />

        <div className="text-center">
          <h2 className="text-lg font-semibold">Alex Morgan</h2>
          <p className="text-base font-medium">Frontend Developer</p>
        </div>

        <Button title="Click Me" />
      </div>
    </Card>
  );
};

export default ProfileCard;
